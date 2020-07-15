class Cart < ApplicationRecord
        has_many :carts_products, :class_name => 'CartsProducts'
        has_many :products, through: :carts_products
      
end
