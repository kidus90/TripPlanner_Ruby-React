class Api::V1::TripsController < ApplicationController
  before_action :set_trip, only: [:show, :update, :destroy]

  def index
    @trips = TripList.all.includes(photo_attachment: :blob)
    render json: @trips.map { |trip| trip.as_json.merge(photo_url: trip.photo.attached? ? url_for(trip.photo) : nil) }
  end

  def show
    render json: @trip
  end

  def create
    @trip = TripList.new(trip_params.except(:upload_file))
    if params[:trip][:upload_file].present?
      @trip.photo.attach(params[:trip][:upload_file])
    end
    if @trip.save
      Notification.create!(
        user_id: @trip.user_id,
        message: "You have created a trip: '#{@trip.title}'",
        read: false
      )
      render json: @trip, status: :created
    else
      render json: { errors: @trip.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @trip.update(trip_params)
      render json: @trip
    else
      render json: { errors: @trip.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @trip.destroy
    render json: { message: 'Trip deleted successfully' }
  end

  private

  def set_trip
    @trip = TripList.find(params[:id])
  end

  def trip_params
    params.require(:trip).permit(:upload_file, :title, :description, :location, :start_date, :end_date, :cost, :travel_type, :traveler_number, :email, :user_id)
  end
end
