class CreateHomes < ActiveRecord::Migration[6.1]
  def change
    create_table :homes do |t|
      t.string :address
      t.integer :price
      t.text :bio
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
