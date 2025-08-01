FactoryBot.define do
  factory :booking do
    user { association :user }
    trip_list { association :trip_list }
  end
end
