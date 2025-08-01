class Api::V1::BookingsController < ApplicationController
  before_action :set_booking, only: [:destroy]

  def index
    @bookings = Booking.all
    render json: @bookings
  end

  def create
    @booking = Booking.new(booking_params)
    trip = TripList.find_by(id: @booking.trip_list_id)
    if trip && trip.traveler_number > 0
      # Prevent user from booking their own trip
      if trip.user_id == @booking.user_id
        render json: { errors: ['You cannot book your own trip.'] }, status: :unprocessable_entity
        return
      end
      ActiveRecord::Base.transaction do
        trip.update!(traveler_number: trip.traveler_number - 1)
        @booking.save!
        # Increment Trip_taken for the user who booked (handle non-idiomatic column name)
        user_info = @booking.user.user_info
        if user_info
          user_info.update_column(:Trip_taken, (user_info.Trip_taken || 0) + 1)
        end
        # Notification logic: notify trip owner
        trip_owner = trip.user
        joiner = @booking.user
        if trip_owner && joiner && trip_owner.id != joiner.id
          Notification.create!(
            user_id: trip_owner.id,
            message: "#{joiner.name} has joined your trip '#{trip.title}'!",
            read: false
          )
        end
      end
      render json: @booking, status: :created
    else
      render json: { errors: ['No available travelers left for this trip'] }, status: :unprocessable_entity
    end
  end

  def destroy
    @booking.destroy
    render json: { message: 'Booking deleted successfully' }
  end

  private

  def set_booking
    @booking = Booking.find(params[:id])
  end

  def booking_params
    params.require(:booking).permit(:user_id, :trip_list_id, :status)
  end
end
