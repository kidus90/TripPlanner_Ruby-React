class UserInfo < ApplicationRecord
  belongs_to :user

  validates :Phone, :Country, :Travel_level, :Trip_taken, presence: true
  validates :Trip_taken, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
