module Webhooks
  class ChargeSucceeded
    def call(event)
      charge = event.data.object

      user = User.find_by(stripe_id: charge.customer)

      c = user.charges.where(stripe_id: charge.id).first_or_create
      c.update(
        amount: charge.amount,
        card_brand: charge.source.brand,
        card_last4: charge.source.last4,
        card_exp_month: charge.source.exp_month,
        card_exp_year: charge.source.exp_year
      )

      subscription = Stripe::Subscription.retrieve(user.stripe_subscription_id)

      readable_amount = (charge.amount.to_i) / 100

      next_transaction = Time.zone.at(subscription.current_period_end).strftime("%m/%d/%Y")

      CareeerMailer.payment_confirmation(
        user.email,
        user.clients.first,
        charge.statement_descriptor,
        readable_amount,
        charge.source.last4,
        next_transaction
      ).deliver

    end
  end
end
