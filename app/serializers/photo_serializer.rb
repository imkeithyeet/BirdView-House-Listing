class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :description
  has_one :home
end
