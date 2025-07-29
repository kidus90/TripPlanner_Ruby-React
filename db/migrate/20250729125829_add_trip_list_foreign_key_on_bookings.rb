class AddTripListForeignKeyOnBookings < ActiveRecord::Migration[8.0]
  def change
    add_foreign_key :bookings, :trip_lists
  end
end
