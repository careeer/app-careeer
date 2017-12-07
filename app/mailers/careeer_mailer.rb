class CareeerMailer < ApplicationMailer
  default from: 'Careeer.me <support@careeer.me>'

  def trial_end(email, client)
    @name = client.name
    @url = "https://www.careeer.me/" + client.slug
    start_time = DateTime.now + 0.hours
    mail(to: email, subject: 'Well done! You completed your free trial', date: start_time)
  end
end
