class User < ApplicationRecord
    has_secure_password
    
    validates :name, presence: true
    validates :email, presence: true, uniqueness: { case_sensitive: false }
    validates :password, presence: true, length: { minimum: 8 }
    
    has_many :trip_lists
    has_many :bookings, through: :trip_lists
    has_many :notifications, dependent: :destroy
    has_one :user_info, dependent: :destroy

end
