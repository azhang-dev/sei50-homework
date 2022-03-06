class FlightsController < ApplicationController

    def search
    
        flights = Flight.where origin: params[:origin], destination: params[:destination]

        # sleep 3 # test loading message
        render json: flights, include: {
            airplane: {
                only: [:name]
            }
        }
    end

    def index
        render json: Flight.all
    end

    def show
        flight = Flight.find( params[:id]) 
        #same syntax render json: flight, include: [:airplane, :reservations]
        render json: flight, include: {
            airplane: {},
            reservations: {
                include: {
                    user: {
                        only: [:name]
                    } 
                } # include:users{}
            } #reservations{}
        } #include: {}

    end
end
