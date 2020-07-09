class CreateCartsProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts_products, id: false do |t|
      t.belongs_to :cart
      t.belongs_to :product
    end
  end
end
