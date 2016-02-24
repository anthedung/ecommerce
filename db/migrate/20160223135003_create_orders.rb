class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :phone
      t.string :name
      t.integer :product_id
      t.string :facebook
      t.text :address
      t.integer :quantity
      t.integer :price
      t.text :instruction
      t.string :product_title

      t.timestamps
    end
  end
end
