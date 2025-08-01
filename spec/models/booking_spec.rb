require 'rails_helper'

RSpec.describe Booking, type: :model do
  
  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:trip_list) }
  end

  describe 'validations' do
    subject { create(:booking) }
    it { should validate_uniqueness_of(:user_id).scoped_to(:trip_list_id).with_message("has already booked this trip") }
  end

  describe 'factory validity' do
    let!(:user) { create(:user) }
    let!(:trip_list) { create(:trip_list, start_date: Date.today, end_date: Date.today + 3.days, user: user) }
    let(:booking) { build(:booking, user: user, trip_list: trip_list) }

    it 'is valid with valid attributes' do
      expect(booking).to be_valid
    end
   

    it "prevents booking two different trips with the same start date" do
    trip1 = create(:trip_list, start_date: Date.today)
    trip2 = create(:trip_list, start_date: Date.today)
    create(:booking, user: user, trip_list: trip1)

    conflict = build(:booking, user: user, trip_list: trip2)
    expect(conflict).not_to be_valid
    expect(conflict.errors[:base]).to include("cannot book multiple trips starting on the same date")
  end
  end
end
