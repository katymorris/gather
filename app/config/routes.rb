Rails.application.routes.draw do
  resources :friendships
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  devise_scope :user do
    authenticated :user do
      root to: 'application#root'
    end

    unauthenticated do

      root 'devise/sessions#new', as: :unauthenticated_root

    end

  end

  get '/search', to: 'searches#index'
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :rooms
  resources :dashboards
end
