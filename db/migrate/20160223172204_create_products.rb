class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.string :category
      t.string :image_url
      t.integer :quantity
      t.integer :price
      t.string :unit
      t.boolean :isNew
      t.integer :likeNo

      t.timestamps
    end
  end
end
