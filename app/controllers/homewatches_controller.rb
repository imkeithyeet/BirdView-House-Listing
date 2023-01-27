class HomewatchesController < ApplicationController
    skip_before_action :authorize, only: [:index]
    
    def index
        homewatches = Homewatch.all
        render json: homewatches
    end

    def create
        homewatch = @current_user.homewatches.create!(homewatch_params)
        render json: homewatch, status: :created
    end

    def destroy
        homewatch = Homewatch.find_by(id: params[:id])
        homewatch.destroy
        head :no_content
    end

    private
    
    def homewatch_params
        params.permit(:user_id, :home_id)
    end
end
