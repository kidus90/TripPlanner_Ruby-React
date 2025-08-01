FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    password { "securePass123" }
    password_confirmation { "securePass123" }
  end
end