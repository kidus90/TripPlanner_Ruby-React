require 'rails_helper'

RSpec.describe Api::V1::UserInfosController, type: :request do
let(:user) { User.create!(name: 'Test', email: 'test@example.com', password: 'password', password_confirmation: 'password') }
let(:user_info) {
  UserInfo.create!(
    user_id: user.id,
    Name: 'Test Name',
    Phone: '123456',
    Country: 'Test Country',
    Travel_level: 'Beginner',
    Travel_preferences: 'Mountains, Beaches',
    Trip_taken: 2
  )
}

  describe 'GET /api/v1/user_infos' do
    it 'returns all user infos' do
      user_info
      get '/api/v1/user_infos'
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to be_an(Array)
    end
  end

  describe 'GET /api/v1/user_infos/:id' do
    it 'shows a user info' do
      get "/api/v1/user_infos/#{user_info.id}"
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['id']).to eq(user_info.id)
    end
  end

  describe 'POST /api/v1/user_infos' do
    it 'creates a user info' do
      post '/api/v1/user_infos', params: {
        user_info: {
          user_id: user.id,
          Name: 'New Name',
          Phone: '654321',
          Country: 'New Country',
          Travel_level: 'Advanced',
          Travel_preferences: 'Cities, Food',
          Trip_taken: 5
        }
      }
      expect(response).to have_http_status(:created)
      expect(JSON.parse(response.body)['Name']).to eq('New Name')
    end
  end

  describe 'PATCH /api/v1/user_infos/:id' do
    it 'updates a user info' do
      patch "/api/v1/user_infos/#{user_info.id}", params: { user_info: { Name: 'Updated Name' } }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['Name']).to eq('Updated Name')
    end
  end

  describe 'DELETE /api/v1/user_infos/:id' do
    it 'deletes a user info' do
      delete "/api/v1/user_infos/#{user_info.id}"
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['message']).to eq('User info deleted successfully')
    end
  end
end
