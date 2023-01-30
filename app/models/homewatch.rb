class Homewatch < ApplicationRecord
    belongs_to :user
    belongs_to :home

    validates_uniqueness_of :user, :scope => :home
end
