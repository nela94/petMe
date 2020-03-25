class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest
  has_many :matches
  has_many :pets
end
