class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.float :price
      t.integer :quantity
      t.references :cart, null: false, foreign_key: true

      t.timestamps
    end
  end
end
