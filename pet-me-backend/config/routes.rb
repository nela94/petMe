Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
resources :pets, :matches, :charges
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
      post '/login', to: 'auth#create'
      get '/current_user', to: 'auth#show'
      get '*path', to: "application#fallback_index_html", constraints: ->(request) do
        !request.xhr? && request.format.html?
      end
    end
  end
end
