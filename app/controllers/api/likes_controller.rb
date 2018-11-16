class Api::LikesController < ApplicationController

  def create
    @like = like.new(like_params)
    if @like.save
      render 'api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :photo_id)
  end

end
