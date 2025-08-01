class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:update, :destroy]
  before_action :authenticate_user, only: [:update, :destroy]

  def create
    @user = User.new(user_params)
    if @user.save
      user_info = UserInfo.create(user_id: @user.id, Phone: "", Country: "", Travel_level: "", Trip_taken: 0,  ) if @user.user_info.nil?
      render json: {user: @user, user_info: user_info, message: "user and user_info created successfully"}, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    if session['User_Id']
      @user = User.find_by(id: session['User_Id'])
      puts @user
      if @user
        render json: @user
      else
        render json: { error: 'User not found' }, status: :not_found
      end
    else
      render json: { error: 'Session not found' }, status: :unauthorized
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: { errors: @user.errors.full_messages, request_params: user_params, user: @user }, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
    render json: { message: 'User deleted successfully' }
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def authenticate_user
    unless session['User_Id'] && session['User_Id'].to_i == @user.id
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
