class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :offers, :offer_count
  has_many :homes
  has_many :offers, serializer: OfferSerializer

  def offer_count
    object.homes.joins(:offers).count
  end
end
