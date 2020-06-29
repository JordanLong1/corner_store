class AddTypeToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :type, :string
  end
end
