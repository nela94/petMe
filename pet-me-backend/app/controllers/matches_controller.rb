class MatchesController < ApplicationController

  def index
    @matches = Match.all
    render json: @matches
  end

  def create
    @match = Match.create(match_params)
    render json: @match
  end

  def show
    @match = Match.find(params[:id])
    render json: @match
  end

  def delete
    @match = Match.find(params[:id])
    @match.destroy
    render json: @match
  end

  private

  def match_params
    params.permit(:name, :gender, :img, :description, :age, :user_id, :pet_id)
  end
end
