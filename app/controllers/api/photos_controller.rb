class Api::PhotosController < ApplicationController

  def index
    @posts = Photo.all
    render :index
  end

  def create
    post = Photo.new(post_params)
    if post.save
      render json: {message: "Photo saved successfully"}
    else
      render json: post.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :photo)
  end
end
