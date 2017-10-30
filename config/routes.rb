Rails.application.routes.draw do

  devise_for :users
  namespace :v1, defaults: { format: :json } do
    resources :clients do
      resources :roadmap_elements, except: :show
    end
    resource :sessions, only: [:create, :destroy, :show]
    resources :users, only: [:create]
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  post 'update/:id' => 'v1/clients#duplicate', defaults: { format: :json }
end
