class OfferSerializer < ActiveModel::Serializer
  attributes :id, :amount, :home, :user
  has_one :user
  has_one :home
end
