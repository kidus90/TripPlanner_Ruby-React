FactoryBot.define do
  factory :user_info do
    user { nil }
    Name { "MyString" }
    Phone { "MyString" }
    Country { "MyString" }
    Travel_level { "MyString" }
    Travel_preferences { "MyText" }
    Trip_taken { 1 }
  end
end
