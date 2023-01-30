Rails.application.routes.draw do

  resources :homewatches, only: [:index, :create, :destroy]
  resources :offers
  resources :photos
  resources :homes, only: [:index, :show, :create, :destroy]
  resources :homes do
    resources :offers, only: [:show, :index, :create]
  end
  resources :homes do
    resources :photos, only: [:show, :index, :create]
  end
  resources :users, only: [:index, :show, :create]
  post"/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
