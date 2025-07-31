require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :request do
  describe 'POST /api/v1/users' do
    it 'registers a new user and creates its user_info as well' do
      post '/api/v1/users', params: { user: { name: 'Test', email: 'test@example.com', password: 'password', password_confirmation: 'password' } }
      expect(response).to have_http_status(:created)
      parsed = JSON.parse(response.body)
      expect(parsed['user']['email']).to eq('test@example.com')
      expect(parsed['user_info']).not_to be_nil
    end
  end

  describe 'GET /api/v1/users/:id' do
    let(:user) { User.create!(name: 'Test', email: 'test@example.com', password: 'password', password_confirmation: 'password') }
    it 'shows a user' do
      post '/api/v1/login', params: { email: user.email, password: 'password', password_confirmation: 'password' }
      expect(response).to have_http_status(:ok)
      
      get "/api/v1/users/#{user.id}"
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['id']).to eq(user.id)
    end
  end

describe 'PATCH /api/v1/users/:id' do
  let!(:user) { User.create!(name: 'Test', email: 'test@example.com', password: 'password123', password_confirmation: 'password123') }


  it 'updates a user' do
    post '/api/v1/login', params: { email: user.email, password: 'password123' }
    puts "login response: #{response.body}"
    expect(response).to have_http_status(:ok)

    puts "user before update: {user: #{user.id}, name: #{user.name}, email: #{user.email}}"
    patch "/api/v1/users/#{user.id}", params: { user: { name: 'shit', email: user.email } }
    puts "user after update: {user: #{user.id}, name: #{user.name}, email: #{user.email}}"

    
    puts "patch response body: #{response.body}"
    # expect(response).to have_http_status(:ok)
    parsed = JSON.parse(response.body)
    puts "parsed: #{parsed}"
    expect(parsed['user']['name']).to eq('shit')
  end
  
  describe 'DELETE /api/v1/users/:id' do
    let!(:user) { User.create!(name: 'Test', email: 'test@example.com', password: 'password', password_confirmation: 'password') }
    it 'deletes a user' do
      post '/api/v1/login', params: { email: user.email, password: 'password', password_confirmation: 'password' }
      expect(response).to have_http_status(:ok)
      delete "/api/v1/users/#{user.id}"
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['message']).to eq('User deleted successfully')
    end
end

end
