class OffersController < ApplicationController

    def index
        render json: Offer.all
    end

    def show
        offer = Offer.find_by(id: params[:id])
        render json: offer, status: :ok
    end

end
