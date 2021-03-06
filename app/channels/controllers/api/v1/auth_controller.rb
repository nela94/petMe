class Api::V1::AuthController < ApplicationController
  def create
    
    @user = User.find_by(username: user_login_params[:username])

    if @user && @user.authenticate(user_login_params[:password])
      token = JWT.encode({ user_id: @user.id }, "secret")
      render json: { user: @user.id, jwt: token }, status: :accepted
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def show
    jwt = request.headers['Authorization']
    id = JWT.decode(jwt, "secret")[0]["user_id"]
    @user = User.find(id)
    render json: {user: @user}

  end

  private

  def user_login_params
    params.require(:user).permit(:username, :password)
  end
end
