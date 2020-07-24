class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :role
      t.string :name
      t.text :background
      t.text :motivation
      t.text :goals
      t.text :friends
      t.text :enemies
      t.text :romance
      t.text :personality
    end
  end
end
