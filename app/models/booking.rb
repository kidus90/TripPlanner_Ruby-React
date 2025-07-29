class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :trip_list

  validates :trip_list_id, presence: true
  validates :user_id, presence: true
end
