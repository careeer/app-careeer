# frozen_string_literal: true

Rails.application.routes.draw do
  mount StripeEvent::Engine, at: '/webhooks/stripe'

  devise_for :users

  namespace :v1, defaults: { format: :json } do
    resources :users, only: %i[create]
    resources :clients do
      resources :roadmap_elements, except: :show
    end
    resource :sessions, only: %i[create destroy show]
    resource :subscription do
      post :preview, to: 'subscriptions#preview'
      post :upgrade, to: 'subscriptions#upgrade'
      post :downgrade, to: 'subscriptions#downgrade'
    end
    post :check, to: 'users#check'
    post :forgot, to: 'users#forgot'
    post :reset, to: 'users#reset'
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
