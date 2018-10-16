class Api::PhotosController < ApplicationController

  def index
    @posts = Photo.all
    render :index
  end

  def show
    @post = Photo.find(params[:id])
    render :show
  end

  def create
    photo = Photo.new(post_params)
    if photo.save
      render json: {message: "Photo saved successfully"}
    else
      render json: photo.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def post_params
    params.require(:photo).permit(:title, :user_id, :attachedPhoto)
  end
end
