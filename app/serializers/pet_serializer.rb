class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :img, :description, :age, :user
end
