class CreateTripLists < ActiveRecord::Migration[8.0]
  def change
    create_table :trip_lists do |t|
      t.string :upload_file
      t.string :title
      t.text :description
      t.string :location
      t.date :start_date
      t.date :end_date
      t.decimal :cost
      t.string :travel_type
      t.integer :traveler_number
      t.string :email
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
