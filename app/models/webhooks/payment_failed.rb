module Webhooks
  class PaymentFailed
    def call(event)
      invoice = event.data.object

      user = User.find_by(stripe_id: invoice.customer)
      subscription = Stripe::Subscription.retrieve(user.stripe_subscription_id)

      next_transaction = Time.zone.at(invoice.next_payment_attempt).strftime("%B %d, %Y")

      CareeerMailer.payment_failed(
        user.email,
        user.clients.first,
        subscription.plan.name,
        (invoice.amount_due / 100.00),
        user.card_last4,
        next_transaction
      ).deliver

    end
  end
end
