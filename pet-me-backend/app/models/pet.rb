class Pet < ApplicationRecord
  has_many :matches
  # belongs_to :user
end
