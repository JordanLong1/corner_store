class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :category
  has_many :carts
end
