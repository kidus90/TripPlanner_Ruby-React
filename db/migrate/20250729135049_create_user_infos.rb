class CreateUserInfos < ActiveRecord::Migration[8.0]
  def change
    create_table :user_infos do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :phone
      t.string :country
      t.string :travel_level
      t.text :travel_preferences
      t.integer :trip_taken

      t.timestamps
    end
  end
end
