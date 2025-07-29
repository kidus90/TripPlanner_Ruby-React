require 'rails_helper'

RSpec.describe User do
  describe 'validations' do 
    context 'Name' do
      it 'requires presence of name' do
        user = User.new(name: nil)
        expect(user).to be_invalid
        expect(user.errors[:name]).to include("can't be blank")
      end
    end
    context 'Email' do
      it 'requires presence of email' do
        user = User.new(name: "Test User", email: nil)
        expect(user).to be_invalid
        expect(user.errors[:email]).to include("can't be blank")
      end

      it 'requires uniqueness of email (case insensitive)' do
        User.create!(name: "Test User", email: "Test@Example.com", password: "secure123")
        duplicate = User.new(name: "Duplicate User", email: "test@example.com", password: "secure456")
        expect(duplicate).to be_invalid
        expect(duplicate.errors[:email]).to include("has already been taken")
      end
    end

    context 'Password' do
      it 'requires presence of password' do
        user = User.new(password: nil)
        expect(user).to be_invalid
        expect(user.errors[:password]).to include("can't be blank")
      end
      it 'validates password length' do
        user = User.new(password: "short")
        expect(user).to be_invalid
        expect(user.errors[:password]).to include("is too short (minimum is 8 characters)")
      end
    end
  end
end
