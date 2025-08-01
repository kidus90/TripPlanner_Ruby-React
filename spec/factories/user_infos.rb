FactoryBot.define do
  factory :user_info do
    user { association :user }
    Phone { Faker::PhoneNumber.phone_number }
    Country { Faker::Address.country }
    Travel_level { Faker::Number.between(from: 1, to: 5) }
    Travel_preferences { Faker::Lorem.paragraph }
    Trip_taken { Faker::Number.between(from: 0, to: 100) }
  end
end
