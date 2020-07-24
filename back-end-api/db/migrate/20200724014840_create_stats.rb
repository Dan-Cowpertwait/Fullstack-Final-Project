class CreateStats < ActiveRecord::Migration[6.0]
  def change
    create_table :stats do |t|
      t.integer :intelligence
      t.integer :reflex
      t.integer :dexterity
      t.integer :technology
      t.integer :cool
      t.integer :willpower
      t.integer :luck
      t.integer :movement
      t.integer :body
      t.integer :empathy
      t.references :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
