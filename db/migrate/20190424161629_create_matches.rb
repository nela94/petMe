class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.string :name
      t.string :gender
      t.string :img
      t.string :description
      t.string :age
      t.belongs_to :user_id
      t.belongs_to :pet_id

      t.timestamps
    end
  end
end
