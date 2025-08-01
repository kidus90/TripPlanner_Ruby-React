class Api::V1::UserInfosController < ApplicationController
  before_action :set_user_info, only: [:show, :update, :destroy]

  def index
    if session['User_Id']
      @user_info = UserInfo.find_by(user_id: session['User_Id'])
      unless @user_info
        @user_info = UserInfo.create(user_id: session['User_Id'], Phone: '', Country: '', Travel_level: 'beginner', Trip_taken: 0)
      end
      render json: @user_info
    else
      render json: { error: 'Session not found' }, status: :unauthorized
    end
  end

  def show
    render json: @user_info
  end

  def update
    if @user_info.update(user_info_params)
      render json: @user_info
    else
      render json: { errors: @user_info.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @user_info.destroy
    render json: { message: 'User info deleted successfully' }
  end

  private

  def set_user_info
    if session['User_Id']
      @user_info = UserInfo.find_by(user_id: session['User_Id'])
      unless @user_info
        @user_info = UserInfo.create(user_id: session['User_Id'], Phone: '', Country: '', Travel_level: 'beginner', Trip_taken: 0)
      end
    else
      render json: { error: 'Session not found' }, status: :unauthorized
    end
  end

  def user_info_params
    params.require(:user_info).permit(:user_id, :Phone, :Country, :Travel_level, :Trip_taken)
  end
end
