class Notification < ApplicationRecord
  belongs_to :user

  validates :message, presence: true
  validates :read, inclusion: { in: [true, false] }
end