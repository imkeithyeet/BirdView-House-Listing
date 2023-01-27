class OffersController < ApplicationController

    def index
        offers = Offer.all
        render json: offers, include: ['user']
    end

    def show
        offer = find_offer
        render json: offer, include: ['user']
    end

    def create
        home = Home.find(params[:home_id])
        offer = @current_user.offers.create!(offer_params.merge(home: home))
        render json: offer, status: :created
    end

    def update
        offer = find_offer
        offer.update!(offer_params)
        render json: offer, status: :updated
    end

    def destroy
        offer = find_offer
        offer.destroy
        head :no_content
    end

    private

    def find_offer
        Offer.find_by(id: params[:id])
    end

    def offer_params
        params.permit(:amount, :user, :home, :home_id)
    end

end
