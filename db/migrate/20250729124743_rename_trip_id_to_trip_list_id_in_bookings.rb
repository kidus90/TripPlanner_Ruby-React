class RenameTripIdToTripListIdInBookings < ActiveRecord::Migration[8.0]
  def change
    remove_foreign_key :bookings, :trips
    remove_column :bookings, :trip_id, :integer
    add_reference :bookings, :trip_list, null: false, foreign_key: true
    add_foreign_key :bookings, :trip_lists
    rename_index :bookings, :trip_id, :trip_list_id
  end
end
