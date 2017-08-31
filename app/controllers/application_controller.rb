class ApplicationController < ActionController::API
  acts_as_token_authentication_handler_for User, fallback: :none

  def fallback_index_html
    render :file => 'public/index.html'
  end
end
