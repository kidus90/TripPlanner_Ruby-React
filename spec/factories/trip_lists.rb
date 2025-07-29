FactoryBot.define do
  factory :trip_list do
    upload_file { "MyString" }
    title { "MyString" }
    description { "MyText" }
    location { "MyString" }
    start_date { "2025-07-29" }
    end_date { "2025-07-29" }
    cost { "9.99" }
    travel_type { "MyString" }
    traveler_number { 1 }
    email { "MyString" }
    user { nil }
  end
end
