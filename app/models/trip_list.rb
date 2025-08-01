class TripList < ApplicationRecord
  belongs_to :user
  has_many :bookings
  has_one_attached :photo


  validates :upload_file, :title, :description, :location, :start_date, :end_date, :travel_type, presence: true
  validates :cost, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :traveler_number, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }

  validate :start_must_be_before_end

  private

  def start_must_be_before_end
    if start_date && end_date && start_date >= end_date
      errors.add(:start_date, "must be before end date")
    end
  end
  
end
