class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :doctor
  def self.all_and_then_some 
    appointment = appointment.all
    appointment.map do | appointment |
      {  id: appointment.id, datetime: appointment.date, patient: appointment.patient, doctor: appointment.doctor}
    end
  end 
end
