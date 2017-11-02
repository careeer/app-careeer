# frozen_string_literal: true

Rails.application.routes.draw do

  devise_for :users
  namespace :v1, defaults: { format: :json } do
    resources :clients do
      resources :roadmap_elements, except: :show
    end
    resource :sessions, only: %i[create destroy show]
    resources :users, only: [:create]
  end

  post 'update/:id' => 'v1/clients#duplicate', defaults: { format: :json }
end
