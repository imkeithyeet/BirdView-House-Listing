class OffersController < ApplicationController

    def index
        offers = Offer.all
        render json: offers, include: ['user']
    end

    def show
        offer = Offer.find_by(id: params[:id])
        render json: offer, include: ['user']
    end

    def create
        home = Home.find(params[:home_id])
        offer = @current_user.offers.create!(offer_params.merge(home: home))
        render json: offer, status: :created
    end


    private

    def offer_params
        params.permit(:amount, :user, :home, :home_id)
    end

end
