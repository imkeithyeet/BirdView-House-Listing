class HomeSerializer < ActiveModel::Serializer
  attributes :id, :address, :price, :bio, :offers, :photos
  has_one :user
  has_many :photos
  has_many :offers, serializer: OfferSerializer
end