Rails.application.routes.draw do
  resources :products
  resources :carts
  resources :carts_products, only: [:create, :new, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
