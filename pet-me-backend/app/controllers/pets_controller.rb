class PetsController < ApplicationController

  def index
    @pets = Pet.all
    render json: @pets
  end

  def show
    @pet = Pet.find(params[:id])
    render json: @pet
  end

  def create
    @pet = Pet.create(pet_params)
    render json: @pet
  end

  private

  def pet_params
    params.require(:name, :gender, :img, :description, :age, :user_id)
  end

end
