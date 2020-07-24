# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_24_014840) do

  create_table "characters", force: :cascade do |t|
    t.string "role"
    t.string "name"
    t.text "background"
    t.text "motivation"
    t.text "goals"
    t.text "friends"
    t.text "enemies"
    t.text "romance"
    t.text "personality"
  end

  create_table "stats", force: :cascade do |t|
    t.integer "intelligence"
    t.integer "reflex"
    t.integer "dexterity"
    t.integer "technology"
    t.integer "cool"
    t.integer "willpower"
    t.integer "luck"
    t.integer "movement"
    t.integer "body"
    t.integer "empathy"
    t.integer "character_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_stats_on_character_id"
  end

  add_foreign_key "stats", "characters"
end
