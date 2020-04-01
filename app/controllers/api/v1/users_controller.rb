class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create(user_params)
    # byebug
    if @user.valid?
      @token = JWT.encode({user_id: @user.id}, "secret")
      render json: { user: @user.username, jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :username, :password)
  end

end
