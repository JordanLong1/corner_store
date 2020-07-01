class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :quantity, :category
  has_one :cart
end
