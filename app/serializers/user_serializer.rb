class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :offers
  has_many :homes
  has_many :offers, serializer: OfferSerializer
end
