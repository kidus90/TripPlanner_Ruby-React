class Api::V1::NotificationsController < ApplicationController
  before_action :set_notification, only: [:update]

  def index
    @notifications = Notification.all
    render json: @notifications
  end

  def update
    if @notification.update(notification_params)
      render json: @notification
    else
      render json: { errors: @notification.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_notification
    @notification = Notification.find(params[:id])
  end

  def notification_params
    params.require(:notification).permit(:read, :message, :user_id)
  end
end
