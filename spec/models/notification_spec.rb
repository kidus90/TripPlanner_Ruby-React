require 'rails_helper'

RSpec.describe Notification, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
  end

  describe 'validations' do
    it { should validate_presence_of(:message) }
    it { should validate_inclusion_of(:read).in_array([true, false]) }
  end

  describe 'factory validity' do
    let(:user) { create(:user) }
    let(:notification) { build(:notification, user: user) }

    it 'is valid with valid attributes' do
      expect(notification).to be_valid
    end

    it 'is invalid without a message' do
      notification.message = nil
      expect(notification).to_not be_valid
    end

    it "is invalid with non-boolean read value" do
      notification.read = nil
    expect { notification.save! }.to raise_error(ActiveRecord::RecordInvalid)
    end
 end
end
