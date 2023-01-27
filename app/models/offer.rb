class Offer < ApplicationRecord
  belongs_to :user
  belongs_to :home

  validates_numericality_of :amount
end
