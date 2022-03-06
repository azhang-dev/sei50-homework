class ReservationsController < ApplicationController
    skip_before_action :verify_authenticity_token 

    FAKE_USER_ID = 40
    def create
        # render json: params

        reservation = Reservation.create!(
            user_id: FAKE_USER_ID, 
            flight_id: params[:flight_id], 
            row: params[:row], 
            col: params[:col]
        )

        if reservation.persisted?
            render json: reservation
        else
            p reservation.errors.full_messages
            render json: { error: true, details: reservation.errors.full_messages }, status: 422
            
        end


    end
end
