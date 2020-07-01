class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :quantity, :category, :id
  has_one :cart
end
