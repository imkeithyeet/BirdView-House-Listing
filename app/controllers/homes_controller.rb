class HomesController < ApplicationController
    def index 
        render json: Home.all
    end
    def show 
        home = Home.find_by(id: params[:id])
        render json: home, status: :ok
    end
end
