require 'rails_helper'

RSpec.describe UserInfo, type: :model do
 let(:user) { create(:user) }

  subject do
    described_class.new(
      user: user,
      Phone: "0912345678",
      Country: "Ethiopia",
      Travel_level: "Expert",
      Trip_taken: 5
    )
  end

  describe "validations" do
    it "is valid with all required attributes" do
      expect(subject).to be_valid
    end

    it "is invalid without a Phone" do
      subject.Phone = nil
      expect(subject).not_to be_valid
    end

    it "is invalid with an incorrectly formatted Phone number" do
      subject.Phone = "12345"
      expect(subject).not_to be_valid
    end

    it "is invalid without Country or Travel_level" do
      subject.Country = nil
      subject.Travel_level = nil
      expect(subject).not_to be_valid
    end

    it "is invalid if Trip_taken is negative" do
      subject.Trip_taken = -1
      expect(subject).not_to be_valid
    end
  end


end
