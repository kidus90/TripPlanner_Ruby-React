class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session['User_Id'] = user.id
      render json: { message: 'Login successful', user_id: user.id }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def destroy
    session.delete('User_Id')
    render json: { message: 'Logged out successfully' }, status: :ok
  end
end
