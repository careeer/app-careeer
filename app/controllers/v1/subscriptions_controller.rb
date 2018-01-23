# frozen_string_literal: true

module V1
  # Subscription endpoints
  class SubscriptionsController < ApplicationController
    def show
      render json: { plan: current_user.plan }, status: :ok
    end

    def new

    end

    def upgrade
      invoice = Stripe::Invoice.create(
        :customer => "cus_9CQ7bS9zi2gBTP",
      )
      invoice.pay

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

    def destroy

    end

    private
    def subscription_params
      params.require(:subscription).permit(:stripeToken, :plan, :last4, :exp_month, :exp_year, :card_type)
    end
  end
end
