Rails.application.routes.draw do
  # devise_for :users
  namespace :v1 do
    resources :roadmap_elements
    resource :sessions, only: [:create, :destroy]
  end

end
