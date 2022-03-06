Rails.application.routes.draw do

  #API endpoints for AJAX-based frontend
# index if all flights
get '/flights' => 'flights#index'
#show page for a single flight, looked up by ID
get '/flights/:id' => 'flights#show'

#Search route, all flights which match a specific origin and destination
get '/flights/search/:origin/:destination' => 'flights#search'

post '/reservations' => 'reservations#create'
end
