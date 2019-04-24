class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :gender
      t.string :img
      t.string :description
      t.string :age
      t.belongs_to :user_id

      t.timestamps
    end
  end
end
