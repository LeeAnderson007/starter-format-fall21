import React, { useState, useEffect } from "react";
import axios from "axios";
import SemanticLoader from "../components/SemanticLoader";
import SemanticLoadError from "../components/SemanticError";
import useAxiosOnMount from "../../hooks/useAxiosOnMount";

export default function AppointmentsWithAxiosHook() {
  const { data: appointments, loading, error } = useAxiosOnMount("/api/appointments");

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
            {a.patient.name} got {a.datetime} on {a.doctor.name}
          </p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Appointments</h1>
      {renderAppointments()}
    </div>
  );
}