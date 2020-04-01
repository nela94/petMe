class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :gender
      t.string :description
      t.string :age
      t.integer :adoption_id
      t.string :img_full
      t.string :contact
      t.belongs_to :user

      t.timestamps
    end
  end
end
