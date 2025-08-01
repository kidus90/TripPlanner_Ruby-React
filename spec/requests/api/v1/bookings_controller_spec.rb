require 'rails_helper'

RSpec.describe Api::V1::BookingsController, type: :request do
let(:user) { User.create!(name: 'Test', email: 'test@example.com', password: 'password', password_confirmation: 'password') }
let(:trip_list) {
  TripList.create!(
    upload_file: "sample.pdf",
    title: 'Trip Title',
    description: 'Desc',
    location: 'Paris',
    start_date: Date.today,
    end_date: Date.today + 1,
    cost: 100.0,
    travel_type: 'Leisure',
    traveler_number: 2,
    email: 'trip@example.com',
    user_id: user.id
  )
}
let(:trip2_list) {
  TripList.create!(
  upload_file: "sample2.pdf",
  user_id: user.id,
  title: 'Test Trip',
  description: 'A test trip', 
  location: 'Test Location', 
  start_date: Date.today + 1,
  end_date: Date.today + 5,
  cost: 500.0,
  travel_type: 'Adventure',
  traveler_number: 1,
  email: 'test@example.com'
  )
}
let!(:booking) { Booking.create!(user_id: user.id, trip_list_id: trip_list.id) }

  describe 'GET /api/v1/bookings' do
    it 'returns all bookings' do
      get '/api/v1/bookings'
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to be_an(Array)
    end
  end

  describe 'POST /api/v1/bookings' do
    it 'creates a booking' do
      post '/api/v1/bookings', params: { booking: { user_id: user.id, trip_list_id: trip2_list.id } }
      puts "Booking created: #{response.body}"
      expect(response).to have_http_status(:created)
      expect(JSON.parse(response.body)['user_id']).to eq(user.id)
    end
  end

  describe 'DELETE /api/v1/bookings/:id' do
    it 'deletes a booking' do
      delete "/api/v1/bookings/#{booking.id}"
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['message']).to eq('Booking deleted successfully')
    end
  end

end
