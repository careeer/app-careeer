module Webhooks
  class PaymentFailed
    def call(event)
      invoice = event.data.object

      if invoice.lines.total_count == 1
        user = User.find_by(stripe_id: invoice.customer)
        subscription = Stripe::Subscription.retrieve(user.stripe_subscription_id)

        CareeerMailer.payment_failed(
          user.email,
          user.clients.first,
          subscription.plan.name,
          (invoice.amount_due / 100.00),
          user.card_last4
        ).deliver
        user.update(subscription_status: "pending")
        user.clients.first.update(account_type: "unpaid")
      end
    end
  end
end
