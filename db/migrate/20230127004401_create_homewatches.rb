class CreateHomewatches < ActiveRecord::Migration[6.1]
  def change
    create_table :homewatches do |t|
      t.integer :user_id
      t.integer :home_id

      t.timestamps
    end
  end
end
