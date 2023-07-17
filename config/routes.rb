Rails.application.routes.draw do
  root 'static_pages#home'
  get '/random_greeting', to: 'greetings#random_greeting'
end
