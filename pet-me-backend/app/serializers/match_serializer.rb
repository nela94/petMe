class MatchSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :img, :description, :age, :user_id, :pet_id
end
