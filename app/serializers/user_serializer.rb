class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :offers, :offer_count, :home_addresses
  has_many :homes
  has_many :offers, serializer: OfferSerializer

  def offer_count
    object.homes.joins(:offers).count
  end

  def home_addresses
    object.offers.map(&:home).map(&:address)
  end
end
