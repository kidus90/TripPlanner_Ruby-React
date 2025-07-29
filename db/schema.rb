# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_07_29_135049) do
  create_table "bookings", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "trip_list_id", null: false
    t.index ["trip_list_id"], name: "index_bookings_on_trip_list_id"
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "notifications", force: :cascade do |t|
    t.string "message"
    t.boolean "read"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_notifications_on_user_id"
  end

  create_table "trip_lists", force: :cascade do |t|
    t.string "upload_file"
    t.string "title"
    t.text "description"
    t.string "location"
    t.date "start_date"
    t.date "end_date"
    t.decimal "cost"
    t.string "travel_type"
    t.integer "traveler_number"
    t.string "email"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_trip_lists_on_user_id"
  end

  create_table "user_infos", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "Name"
    t.string "Phone"
    t.string "Country"
    t.string "Travel_level"
    t.text "Travel_preferences"
    t.integer "Trip_taken"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_infos_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "bookings", "trip_lists"
  add_foreign_key "bookings", "users"
  add_foreign_key "notifications", "users"
  add_foreign_key "trip_lists", "users"
  add_foreign_key "user_infos", "users"
end
