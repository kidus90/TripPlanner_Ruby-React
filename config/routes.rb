Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  namespace :api do
    namespace :v1 do

      # User registration and management
      post   '/users',         to: 'users#create', as: 'register_user'
      get    '/users',         to: 'users#show',    as: 'user'
      patch  '/users/:id',     to: 'users#update'
      put    '/users/:id',     to: 'users#update'
      delete '/users/:id',     to: 'users#destroy'

      # UserInfos routes
      get    '/user_infos',        to: 'user_infos#index',   as: 'user_infos'
      get    '/user_infos/:id',    to: 'user_infos#show',    as: 'user_info'
      post   '/user_infos',        to: 'user_infos#update'
      patch  '/user_infos/:id',    to: 'user_infos#update'
      delete '/user_infos/:id',    to: 'user_infos#destroy'

      # Trips routes
      get    '/trips',          to: 'trips#index',   as: 'trips'
      get    '/trips/:id',      to: 'trips#show',    as: 'trip'
      post   '/trips',          to: 'trips#create'
      patch  '/trips/:id',      to: 'trips#update'
      put    '/trips/:id',      to: 'trips#update'
      delete '/trips/:id',      to: 'trips#destroy'

      # Bookings routes
      get    '/bookings',       to: 'bookings#index', as: 'bookings'
      post   '/bookings',       to: 'bookings#create'
      delete '/bookings/:id',   to: 'bookings#destroy', as: 'booking'

      # Notifications routes
      get    '/notifications',  to: 'notifications#index', as: 'notifications'
      patch  '/notifications/:id', to: 'notifications#update'
      put    '/notifications/:id', to: 'notifications#update'

      # Sessions routes
      post   '/login',  to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy'
    end
  end
end
