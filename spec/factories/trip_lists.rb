FactoryBot.define do
  factory :trip_list do
    upload_file { "MyString" }
    title { Faker::Lorem.sentence(word_count: 3) }
    description { Faker::Lorem.paragraph }
    location { Faker::Address.city }
    start_date { Date.today }
    end_date { Date.today + 2.days }
    cost { "9.99" }
    travel_type { "MyString" }
    traveler_number { Faker::Number.between(from: 1, to: 10) }
    email { Faker::Internet.email }
    user { association :user }
  end
end
