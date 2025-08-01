require 'rails_helper'

RSpec.describe TripList, type: :model do
let(:user) { create(:user) } 

  subject do
    described_class.new(
      upload_file: "itinerary.pdf",
      title: "Summer Getaway",
      description: "A chill vacation by the beach.",
      location: "Zanzibar",
      start_date: Date.today + 10,
      end_date: Date.today + 15,
      cost: 1200.50,
      travel_type: "Leisure",
      traveler_number: 4,
      email: "group@example.com",
      user: user
    )
  end

  it "is valid with all required attributes" do
    expect(subject).to be_valid
  end

  it "is invalid without a title" do
    subject.title = nil
    expect(subject).not_to be_valid
  end

  it "is invalid with a bad email format" do
    subject.email = "invalid-email"
    expect(subject).not_to be_valid
  end

  it "is invalid with a negative cost" do
    subject.cost = -50
    expect(subject).not_to be_valid
  end

  it "is invalid without a description" do
    subject.description = nil
    expect(subject).not_to be_valid
  end

  it "is invalid without a upload_file" do
    subject.upload_file = nil
    expect(subject).not_to be_valid
  end 


  it "is invalid without a cost" do
    subject.cost = nil
    expect(subject).not_to be_valid
  end


  it "is invalid without an email" do
    subject.email = nil
    expect(subject).not_to be_valid
  end

  it "is invalid without a start_date" do
    subject.start_date = nil
    expect(subject).not_to be_valid
  end

  it "is invalid without an end_date" do
    subject.end_date = nil
    expect(subject).not_to be_valid
  end  

  it "is invalid without a location" do
    subject.location = nil
    expect(subject).not_to be_valid
  end

  it "is invalid without a travel_type" do
    subject.travel_type = nil
    expect(subject).not_to be_valid   
  end

  it "is invalid without a traveler_number" do
    subject.traveler_number = nil
    expect(subject).not_to be_valid
  end

  it "is invalid without a user" do
    subject.user = nil
    expect(subject).not_to be_valid
  end

  it "is invalid if start_date is after end_date" do
      subject.start_date = Date.today + 12
      subject.end_date = Date.today + 10
      expect(subject).not_to be_valid
    end

    it "is invalid if dates are the same" do
      subject.start_date = Date.today + 10
      subject.end_date = Date.today + 10
      expect(subject).not_to be_valid
    end

end



