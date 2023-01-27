class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        user = User.all
        render json: user, include: ['homes', 'homes.photos', 'homes.offers', 'homes.offers.user', 'offers', 'offers.users', 'offers.users.username'], include: :UserSerializer
    end

    def show
        render json: @current_user, include: ['homes', 'homes.photos', 'homes.offers', 'homes.offers.user', 'offers', 'offers.user']
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username,:email, :password, :password_confirmation)
    end

    def offer_count
        homes.joins(:offers).count
    end

end