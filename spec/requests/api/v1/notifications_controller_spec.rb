require 'rails_helper'

RSpec.describe Api::V1::NotificationsController, type: :request do
let(:user) { User.create!(name: 'Test', email: 'test@example.com', password: 'password', password_confirmation: 'password') }
let!(:notification) { Notification.create!(message: 'Test', user_id: user.id, read: false) }

  describe 'GET /api/v1/notifications' do
    it 'returns all notifications' do
      get '/api/v1/notifications'
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to be_an(Array)
    end
  end

  describe 'PATCH /api/v1/notifications/:id' do
    it 'updates a notification' do
      patch "/api/v1/notifications/#{notification.id}", params: { notification: { read: true } }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['read']).to eq(true)
    end
  end
end
