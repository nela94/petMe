class MatchesController < ApplicationController

  def index
    @matches = Match.all
    render json: @matches
  end

  def create
    # check to see if pet exsists?
    # If yes save to variable
    # If No create Pet and save to variable
    @pet = Pet.find_by(adoption_id: pet_params[:adoption_id])

    if !@pet
      @pet = Pet.create(pet_params)
    end

    # byebug

    @match = Match.create(user_id: match_params[:user_id], pet_id: @pet.id)
    puts @match.errors.full_messages
    render json: @match
  end

  def show
    @match = Match.find(params[:id])
    render json: @match
  end

  def destroy
    @match = Match.find(params[:id])
    @match.destroy
    render json: @match
  end

  private

  def match_params
    # byebug
    params.permit(:user_id, :pet_id)
  end

  def pet_params
    params.require(:pet).permit(:adoption_id, :img_full, :contact, :name, :gender, :description, :age, :user_id)
  end
end
