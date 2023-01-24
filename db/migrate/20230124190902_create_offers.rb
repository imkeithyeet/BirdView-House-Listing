class CreateOffers < ActiveRecord::Migration[6.1]
  def change
    create_table :offers do |t|
      t.integer :amount
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :home, null: false, foreign_key: true

      t.timestamps
    end
  end
end
