class PetSerializer < ActiveModel::Serializer
  attributes :id, :adoption_id, :img_full, :contact, :name, :gender, :description, :age, :user_id
  has_many :matches
end
