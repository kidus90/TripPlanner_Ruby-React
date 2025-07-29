class TripList < ApplicationRecord
  belongs_to :user
  has_many :bookings
  has_one_attached :photo


  validates :upload_file, presence: true
  validates :title, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :cost, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :travel_type, presence: true
  validates :traveler_number, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
