class User < ApplicationRecord
    has_secure_password
    has_many :homes
    has_many :offers 
    has_many :offered_homes, through: :offers, class_name:"Home"
    has_many :homewatches, dependent: :destroy
end
