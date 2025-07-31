require 'rails_helper'

RSpec.describe Api::V1::TripsController, type: :request do
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

  describe 'GET /api/v1/trips' do
    it 'returns all trips' do
      trip_list
      get '/api/v1/trips'
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to be_an(Array)
    end
  end

  describe 'GET /api/v1/trips/:id' do
    it 'shows a trip' do
      get "/api/v1/trips/#{trip_list.id}"
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['id']).to eq(trip_list.id)
    end
  end

  describe 'POST /api/v1/trips' do
    it 'creates a trip' do
      post '/api/v1/trips', params: { trip: {upload_file: "sample.pdf", title: 'New', description: 'Test', location: 'NY', start_date: Date.today, end_date: Date.today + 1, cost: 200.0, travel_type: 'Adventure', traveler_number: 3, email: 'new@example.com', user_id: user.id } }
      expect(response).to have_http_status(:created)
      expect(JSON.parse(response.body)['title']).to eq('New')
    end
  end

  describe 'PATCH /api/v1/trips/:id' do
    it 'updates a trip' do
      patch "/api/v1/trips/#{trip_list.id}", params: { trip: { title: 'Updated' } }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['title']).to eq('Updated')
    end
  end

  describe 'DELETE /api/v1/trips/:id' do
    it 'deletes a trip' do
      delete "/api/v1/trips/#{trip_list.id}"
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['message']).to eq('Trip deleted successfully')
    end
  end
end
