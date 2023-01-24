class OfferSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :home
end
