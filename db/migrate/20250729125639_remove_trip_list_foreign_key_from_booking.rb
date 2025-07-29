class RemoveTripListForeignKeyFromBooking < ActiveRecord::Migration[8.0]
  def change
    remove_foreign_key :bookings, :trip_lists
  end
end
