class OfferSerializer < ActiveModel::Serializer
  attributes :id, :amount, :home, :user, :home_address
  has_one :user
  has_one :home
  
  def home_address
    object.home.address
  end
  
end
