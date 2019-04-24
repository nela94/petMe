class User < ApplicationRecord
  has_many :mactches 
  has_secure_password
end
