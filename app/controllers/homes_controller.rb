class HomesController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Home.all
    end

    def show
        home = Home.find_by(id: params[:id])
        render json: home, status: :ok
    end

    private

    def house_params
        params.permit(:address, :price, :bio)
    end

end
