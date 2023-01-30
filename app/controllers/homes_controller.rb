class HomesController < ApplicationController
    include ActiveSupport::NumberHelper
    skip_before_action :authorize, only: [:index, :show]

    def index
        homes = Home.all
        render json: homes, include: [:user]
    end

    def show
        home = find_home
        render json: home, status: :ok
    end

    def create
        home = @current_user.homes.create!(house_params)
        render json: home, status: :created
    end

    def destroy
        home = find_home
        home.destroy
        head :no_content
    end

    private

    def find_home
        home = Home.find_by(id: params[:id])
    end

    def house_params
        params.permit(:address, :price, :bio)
    end

end
