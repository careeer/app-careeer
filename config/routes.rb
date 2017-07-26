Rails.application.routes.draw do
  namespace :v1 do
    resources :roadmap_elements
  end

end
