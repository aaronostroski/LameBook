Rails.application.routes.draw do
  devise_for :users do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  resources :posts

  resources :posts_likes
  # devise_for :users, :path => '', :path_names => { :sign_in => "login", :sign_out => "logout", :sign_up => "register" }
  get '/timeline', to: 'timeline#index'
  root "timeline#index"
end
