Rails.application.routes.draw do

  # devise_for :users
  namespace :v1, defaults: { format: :json } do
    resources :clients do
      resources :roadmap_elements, except: :show
    end
    resource :sessions, only: [:create, :destroy]
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  get '/:id' => 'v1/clients#roadmap', defaults: { format: :json }
end
