Rails.application.routes.draw do
  devise_for :users
  get '/timeline', to: 'timeline#index'
  root "timeline#index"
end
