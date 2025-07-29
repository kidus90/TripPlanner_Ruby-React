require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :request do
  describe 'POST /api/v1/users' do
    it 'registers a new user' do
      post '/api/v1/users', params: { user: { name: 'Test', email: 'test@example.com', password: 'password', password_confirmation: 'password' } }
      expect(response).to have_http_status(:created)
      expect(JSON.parse(response.body)['email']).to eq('test@example.com')
    end
  end

  describe 'GET /api/v1/users/:id' do
    let(:user) { User.create!(name: 'Test', email: 'test@example.com', password: 'password', password_confirmation: 'password') }
    it 'shows a user' do
      get "/api/v1/users/#{user.id}"
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['id']).to eq(user.id)
    end
  end

  describe 'PATCH /api/v1/users/:id' do
    let(:user) { User.create!(name: 'Test', email: 'test@example.com', password: 'password', password_confirmation: 'password') }
    it 'updates a user' do
      patch "/api/v1/users/#{user.id}", params: { user: { name: 'Updated' } }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['name']).to eq('Updated')
    end
  end

  describe 'DELETE /api/v1/users/:id' do
    let!(:user) { User.create!(name: 'Test', email: 'test@example.com', password: 'password', password_confirmation: 'password') }
    it 'deletes a user' do
      delete "/api/v1/users/#{user.id}"
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['message']).to eq('User deleted successfully')
    end
  end
end
