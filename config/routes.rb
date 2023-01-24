Rails.application.routes.draw do
  
  resources :offers
  resources :photos
  resources :homes, only: [:index, :show]
  resources :users, only: [:index, :show, :create]
  post"/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
