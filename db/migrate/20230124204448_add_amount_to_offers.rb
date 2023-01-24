class AddAmountToOffers < ActiveRecord::Migration[6.1]
  def change
    add_column :offers, :amount, :integer
  end
end
