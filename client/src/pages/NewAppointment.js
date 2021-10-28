import React, { useState } from "react";
import SemanticLoader from "../components/SemanticLoader";
import SemanticLoadError from "../components/SemanticLoadError";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import { Button, Form, Input, Select } from "semantic-ui-react";
import axios from "axios";

// Bonus create a dropdownloader
export default function NewAppointment() {
  const [doctorId, setDoctorId] = useState(null);
  const [patientId, setPatientId] = useState(null);
  const [date, setDate] = useState(0);
  const {
    data: patients,
    loading: patientLoading,
    error: perr,
  } = useAxiosOnMount("/api/patients");
  const {
    data: doctors,
    loading: doctorLoading,
    error: derr,
  } = useAxiosOnMount("/api/doctors");

  const handleChange = (e, { value }) => {
    setPatientId(value);
  };
  const handleSkillChange = (e, { value }) => {
    setDoctorId(value);
  };
  const handleSubmit = async () => {
    let res = await axios.post("/api/appointments", {
      date,
      doctor_id: doctorId,
      patient_id: patientId,
    });
  };

  const renderPatients = () => {
    if (patientLoading) {
      return <SemanticLoader />;
    }
    if (perr) {
      return <SemanticLoadError error={perr} />;
    }
    
    const patientsOptions = patients.map((p) => {
      return { key: p.id, value: p.id, text: p.name };
    });

    return (
      <Select
        onChange={handleChange}
        placeholder="Select Patient"
        options={patientsOptions}
      />
    );
  };

  const renderDoctors = () => {
    if (doctorLoading) {
      return <SemanticLoader />;
    }
    if (derr) {
      return <SemanticLoadError error={derr} />;
    }

    const doctorsOptions = doctors.map((d) => {
      return { key: d.id, value: d.id, text: d.name };
    });

    return (
      <Select
        onChange={handleSkillChange}
        placeholder="Select Doctor"
        options={doctorsOptions}
      />
    );
  };

  return (
    <div>
      <h1>New Appointment</h1>
      <Form onSubmit={handleSubmit}>
        {renderPatients()}
        {renderDoctors()}
        <Input
          placeholder="enter appointment"
          value={date}
          onChange={(e, { value }) => setDate(value)}
        />
        <Button type={"submit"}>add</Button>
      </Form>
    </div>
  );
}