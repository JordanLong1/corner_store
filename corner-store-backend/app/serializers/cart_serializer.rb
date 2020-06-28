class CartSerializer < ActiveModel::Serializer
  attributes :id, :item_count, :total_price
end
