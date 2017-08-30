Rails.application.routes.draw do

  # devise_for :users
  namespace :v1, defaults: { format: :json } do
    resources :clients do
      resources :roadmap_elements, except: :show
    end
    resource :sessions, only: [:create, :destroy]
  end
  get '/:id' => 'v1/clients#roadmap', defaults: { format: :json }
end
