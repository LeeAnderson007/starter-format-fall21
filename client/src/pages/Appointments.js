import React, { useState, useEffect } from "react";
import axios from "axios";
import SemanticLoader from "../components/SemanticLoader";
import SemanticLoadError from "../components/SemanticLoadError";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getAppointments();
  }, []);

  const renderAppointments = () => {
    if (loading) return <SemanticLoader />;
    if (error)
      return (
        <SemanticLoadError
          header={"Error occured retrieving appointments"}
          error={error}
        />
      );
    if (appointments.length === 0) {
      return <p>No Appointments</p>;
    }
    return appointments.map((a) => {
      return (
        <div key={a.id}>
          <p>
            {a.patient.name} got {a.date} on {a.doctor.name}
          </p>
        </div>
      );
    });
  };

  const getAppointments = async () => {
    try {
      setError(null);
      let res = await axios.get("/api/appointments");
      setAppointments(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Appointments</h1>
      {renderAppointments()}
    </div>
  );
}
