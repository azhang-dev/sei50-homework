class User < ApplicationRecord
    has_secure_password # check and verify users password
    has_many :reservations
    has_many :flights, through: :reservations

end
