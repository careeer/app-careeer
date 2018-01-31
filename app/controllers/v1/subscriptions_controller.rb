# frozen_string_literal: true

module V1
  # Subscription endpoints
  class SubscriptionsController < ApplicationController
    def show
      render json: {
        plan: current_user.plan,
        card_last4: current_user.card_last4,
        card_exp_month: current_user.card_exp_month,
        card_exp_year: current_user.card_exp_year,
        card_brand: current_user.card_brand
      }, status: :ok
    end

    def preview
      # Set proration date to this moment:
      proration_date = Time.now.to_i

      customer =  current_user.stripe_customer
      subscription = customer.subscriptions.retrieve(current_user.stripe_subscription_id)

      # See what the next invoice would look like with a plan switch
      # and proration set:
      items = [{
        id: subscription.items.data[0].id,
        plan: params[:plan], # Switch to new plan
      }]

      invoice = Stripe::Invoice.upcoming({
        customer: customer.id,
        subscription: subscription.id,
        subscription_items: items,
        subscription_proration_date: proration_date,
      })

      next_transaction = Time.zone.at(subscription.current_period_end).strftime("%B %d, %Y")

      # Calculate the proration cost:
      current_prorations = invoice.lines.data.select { |ii| ii.period.start == proration_date }
      cost = 0
      current_prorations.each do |p|
          cost += p.amount
      end

      render json: {
        cost: cost / 100.0,
        proration_date: proration_date,
        next_transaction: next_transaction,
      }, status: :ok
    end

    def upgrade
      customer =  current_user.stripe_customer

      begin
        subscription = customer.subscriptions.retrieve(current_user.stripe_subscription_id)
        subscription.items = [
            {
              id: subscription.items.data[0].id,
              plan: params[:plan],
            },
        ]
        subscription.proration_date = params[:proration_date]
        updated_subscription = subscription.save

        next_transaction = Time.zone.at(updated_subscription.current_period_end).strftime("%B %d, %Y")

        invoice = Stripe::Invoice.create(
          :customer => customer.id,
        )
        invoice.pay

        CareeerMailer.upgrade_subscription(
          current_user.email,
          current_user.clients.first,
          updated_subscription.plan.name,
          (invoice.amount_due / 100.00),
          (updated_subscription.plan.amount / 100.00),
          current_user.card_last4,
          next_transaction
        ).deliver

        current_user.assign_attributes(
          plan: params[:plan]
        )

        if current_user.save
          head(:ok)
        else
          head(:unprocessable_entity)
        end
      rescue Stripe::CardError => e
        render json: { error: e.message}, status: :payment_required
      end
    end

    def downgrade
      customer =  current_user.stripe_customer

      begin
        subscription = customer.subscriptions.retrieve(current_user.stripe_subscription_id)
        subscription.items = [
            {
              id: subscription.items.data[0].id,
              plan: params[:plan],
            },
        ]
        subscription.prorate = false
        updated_subscription = subscription.save

        CareeerMailer.downgrade_subscription(
          current_user.email,
          current_user.clients.first,
          updated_subscription.plan.name,
          (updated_subscription.plan.amount / 100.00),
          current_user.card_last4,
          next_transaction
        ).deliver

        current_user.assign_attributes(
          plan: params[:plan]
        )

        if current_user.save
          head(:ok)
        else
          head(:unprocessable_entity)
        end
      rescue Stripe::CardError => e
        render json: { error: e.message}, status: :payment_required
      end
    end

    def create
      customer =  current_user.stripe_customer

      begin
        subscription = customer.subscriptions.create(
          source: params[:stripeToken],
          plan: params[:plan]
        )

        current_user.assign_attributes(
          stripe_subscription_id: subscription.id,
          card_last4: params[:last4],
          card_exp_month: params[:exp_month],
          card_exp_year: params[:exp_year],
          card_brand: params[:card_type],
          plan: params[:plan]
        )

        if current_user.save
          head(:ok)
        else
          head(:unprocessable_entity)
        end

      rescue Stripe::CardError => e
        render json: { error: e.message}, status: :payment_required
      end
    end

    def update
      customer =  current_user.stripe_customer

      begin
        source = customer.sources.create(source: params[:stripeToken])

        customer.default_source = source.id
        customer.save

        CareeerMailer.downgrade_subscription(
          current_user.email,
          current_user.clients.first,
          current_user.card_last4,
        ).deliver

        current_user.assign_attributes(
          card_last4: params[:last4],
          card_brand: params[:card_type],
          card_exp_month: params[:exp_month],
          card_exp_year: params[:exp_year]
        )

        if current_user.save
          head(:ok)
        else
          head(:unprocessable_entity)
        end

      rescue Stripe::CardError => e
        render json: { error: e.message}, status: :bad_request

      end

    end

    def destroy
      customer =  current_user.stripe_customer
      subscription = customer.subscriptions.retrieve(current_user.stripe_subscription_id).delete

      expires_at = Time.zone.at(subscription.current_period_end)
      if current_user.update(expires_at: expires_at, stripe_subscription_id: nil)
        head(:ok)
      else
        head(:unprocessable_entity)
      end
    end

    private
    def subscription_params
      params.require(:subscription).permit(:stripeToken, :plan, :last4, :exp_month, :exp_year, :card_type)
    end
  end
end
