class UserInfo < ApplicationRecord
  belongs_to :user

  validates :name, :phone, :country, :travel_level, presence: true
  validates :trip_taken, numericality: { only_integer: true, greater_than_or_equal_to: 0 }, allow_nil: true
  validates :phone, format: { with: /\A\+?\d{7,15}\z/, message: "must be a valid phone number" }
end
