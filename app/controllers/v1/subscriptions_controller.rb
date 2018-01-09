# frozen_string_literal: true

module V1
  # Subscription endpoints
  class SubscriptionsController < ApplicationController
    def show

    end

    def new

    end

    def create
      customer =  current_user.stripe_customer

      begin
        subscription = customer.subscriptions.create(
          source: params[:stripeToken],
          plan: params[:plan]
        )

        next_transaction = Time.zone.at(subscription.current_period_end).strftime("%m/%d/%Y")
        CareeerMailer.payment_confirmation(
          current_user.email,
          current_user.clients.first,
          params[:plan_name],
          params[:plan_cost],
          params[:last4],
          next_transaction
        ).deliver

        current_user.assign_attributes(
          stripe_subscription_id: subscription.id,
          card_last4: params[:last4],
          card_exp_month: params[:exp_month],
          card_exp_year: params[:exp_year],
          card_brand: params[:card_type]
        )

        if current_user.save
          head(:ok)
        else
          head(:unprocessable_entity)
        end

      rescue Stripe::CardError => e
        @error_message = e.message
        render :card_error, status: :bad_request
      end
    end

    def destroy

    end

    private
    def subscription_params
      params.require(:subscription).permit(:stripeToken, :plan, :plan_name, :plan_cost, :last4, :exp_month, :exp_year, :card_type)
    end
  end
end
