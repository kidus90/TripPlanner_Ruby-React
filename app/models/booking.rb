class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :trip_list

  validates :trip_list_id, presence: true
  validates :user_id, presence: true
  validates :user_id, uniqueness: { scope: :trip_list_id, message: "has already booked this trip" }
  # validate :no_duplicate_bookings
  validate :no_conflicting_trip_dates

# def no_duplicate_bookings
#   if Booking.exists?(user_id: user_id, trip_list_id: trip_list_id)
#     errors.add(:trip_list_id, "has already been booked by the user")
#   end
# end

def no_conflicting_trip_dates
  return unless trip_list&.start_date

  conflicting = Booking.joins(:trip_list)
                       .where(user_id: user_id)
                       .where(trip_lists: { start_date: trip_list.start_date })
                       .where.not(trip_lists: { id: trip_list.id })

  if conflicting.exists?
    errors.add(:base, "cannot book multiple trips starting on the same date")
  end
end

end
