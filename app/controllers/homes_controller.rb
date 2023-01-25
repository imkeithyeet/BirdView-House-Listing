class HomesController < ApplicationController
    def index 
        render json: Home.all
    end
end
