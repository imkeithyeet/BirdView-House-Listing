class HomewatchSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :home_id

  belongs_to :home
  belongs_to :user
end
