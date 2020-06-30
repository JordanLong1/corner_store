class CartSerializer < ActiveModel::Serializer
  attributes :id, :item_count, :total_price
  has_many :products
end
