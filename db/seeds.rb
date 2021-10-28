# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require "faker"
# Thing.create(name:Faker::Company.name)
# Thing.create(name:Faker::Company.name)

require 'faker'
Appointment.destroy_all
Doctor.destroy_all
Patient.destroy_all

a = Doctor.create(name: 'Linda Johnson MD')
b = Doctor.create(name: 'Brian Mattiez MD')
c = Doctor.create(name: 'Logan Donaldson MD')

# Skills could also be a homework with a grade
d = Doctor.create(name: 'Rob Thomas MD')
e = Doctor.create(name: 'Ryan Renalds MD')

skills =[a,b,c,d,e]


5.times do |i|
 patient = Patient.create(name: Faker::Name.name)
 5.times do |i|
  appointment = Appointment.create(date: Faker::Time.forward(days: 30, period: :afternoon),, doctor_id: doctors[i].id, patient_id: patient.id)
 end
end

puts "doctors SIZE: #{Doctor.all.length}"
puts "patient SIZE: #{Patient.all.length}"
puts "appointment SIZE: #{Appointment.all.length}"

# grab users skill
puts "FIRST Patient Doctor: #{Patent.first.doctors}"

# grab users firts skill grades
puts "FIRST patient appointment: #{Patient.first.appointments}"