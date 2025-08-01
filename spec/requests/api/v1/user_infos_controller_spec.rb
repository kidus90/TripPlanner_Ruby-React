require 'rails_helper'

RSpec.describe Api::V1::UserInfosController, type: :request do
let(:user) { User.create!(name: 'Test', email: 'test8@example.com', password: 'password') }
let(:user_info) {
  UserInfo.create!(
    user_id: user.id,
    Phone: '123456789',
    Country: 'Test Country',
    Travel_level: 'Beginner',
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

  describe 'PATCH /api/v1/user_infos/:id' do
    it 'updates a user info' do
      patch "/api/v1/user_infos/#{user_info.id}", params: { user_info: { Phone: '987654321' } }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['Phone']).to eq('987654321')
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
