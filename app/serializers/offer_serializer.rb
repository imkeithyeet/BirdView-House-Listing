class OfferSerializer < ActiveModel::Serializer
  attributes :id, :amount, :user, :home
  has_one :user
  has_one :home
end
