class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :quantity
  has_one :cart
end
