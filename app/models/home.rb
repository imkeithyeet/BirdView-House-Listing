class Home < ApplicationRecord
  belongs_to :user
  has_many :offers 
  has_many :users, through: :offers 
  has_many :photos 
  # has_many :homewatches
end
