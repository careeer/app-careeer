class CareeerMailer < ApplicationMailer
  default from: 'Careeer.me <support@careeer.me>'

  def trial_end(email, client)
    @name = client.name.split.first
    @url = "https://www.careeer.me/" + client.slug
    start_time = DateTime.now + ENV['TRIAL_END_EMAIL_DELAY'].to_f.hours

    mail(to: email, subject: 'Well done! You completed your free trial', date: start_time)
  end

  def welcome(email, client)
    @name = client.name.split.first
    @url = "https://medium.com/@careeer.me/why-i-built-careeer-me-ff5869503d1e"

    mail(to: email, from: 'Anya Iverova <anya@careeer.me>', subject: 'Free trial started! (Ask me anything)')
  end
end
