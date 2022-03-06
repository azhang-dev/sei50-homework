User.destroy_all

print "creating users..."

u1= User.create! name: 'Test User 1', email: 'one@gmail.com', password: 'chicken'
u2= User.create! name: 'Test User 2', email: 'two@gmail.com', password: 'chicken'
u3= User.create! name: 'Test User 3', email: 'three@gmail.com', password: 'chicken'

puts "Creates #{User.count} users."

Airplane.destroy_all
print "creating airplaines..."

a1 = Airplane.create! name: '782', rows: 40, cols: 6
a2 = Airplane.create! name: '727 MAX', rows: 80, cols: 8

puts "created #{Airplane.count} airplane"

Flight.destroy_all
print "creating flights...."

f1= Flight.create! flight_number: 'BA256', departure_date: '2022-03-01 04:20', origin: 'SYD', destination: 'MEL', airplane_id: a1.id
f2= Flight.create! flight_number: 'BA512', departure_date: '2022-03-02 11:20', origin: 'SYD', destination: 'MEL', airplane_id: a1.id
f3= Flight.create! flight_number: 'BA1024', departure_date: '2022-03-03 16:20', origin: 'SYD', destination: 'SIN', airplane: a2

puts "created #{Flight.count} flights"


Reservation.destroy_all
print "creating reservations..."

r1= Reservation.create! flight_id: f1.id, user_id: u1.id, row:10, col: 2
r2= Reservation.create! flight: f1, user: u2, row:10, col: 3
r3= Reservation.create! flight: f1, user: u3, row:10, col: 4
r4= Reservation.create! flight: f2, user: u3, row:15, col: 1

puts "created #{Reservation.count} reservations"
puts "Association tests:"
puts "Airplaine #1 has #{Airplane.first.flights.length} flights (should be 2)"
raise Exception.new('Airplane flights association is broken') if Airplane.first.flights.length != 2
# ^ Automatically check that the number of flights in the association matches 

puts "Flight #1 has #{Flight.first.reservations.length} reservations (should be 3)"
puts "User #3 has #{User.third.reservations.length} reservations (should be 2)"

puts "Flight #1 has airplane name #{Flight.first.airplane.name} (should be 782)"
puts "Reservation #1 has user name #{Reservation.first.user.name} (should be 'Test User 1')"
puts "Reservation #2 has flight name #{Reservation.second.flight.flight_number} (should be 'BA256')"