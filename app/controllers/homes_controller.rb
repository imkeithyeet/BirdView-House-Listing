class HomesController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Home.all
    end

    def show
        home = Home.find_by(id: params[:id])
        render json: home, status: :ok
    end

    def create
        home = @current_user.homes.create!(house_params)
        render json: home, status: :created
    end

    private

    def house_params
        params.permit(:address, :price, :bio)
    end

end
