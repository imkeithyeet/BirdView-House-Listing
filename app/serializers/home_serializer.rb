class HomeSerializer < ActiveModel::Serializer
  attributes :id, :address, :price, :bio
  has_one :user
  has_many :photos
end
