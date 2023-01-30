class PhotosController < ApplicationController

    def create
        home = Home.find_by(id: params[:home_id])
        photo = home.photos.create!(photo_params)
        render json: photo, status: :created
    end

    private

    def photo_params
        params.permit(:image_url, :description, :home_id)
    end

end
