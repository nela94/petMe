class User < ApplicationRecord
  has_many :matches
  has_many :pets, through: :matches
  has_secure_password
end
