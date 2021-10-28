import React from "react";
import SemanticLoadError from "../components/SemanticLoadError";
import SemanticLoader from "../components/SemanticLoader";
import useAxiosOnMount from "../../hooks/useAxiosOnMount";
import UserListLoader from "./UsersListLoader";

export default function Patients() {
  const { data: patients, loading, error } = useAxiosOnMount("/api/patients");

  const renderPatients = () => {
    if (loading) return <SemanticLoader />;
    if (error)
      return (
        <SemanticLoadError
          header={"Error occured retrieving patients"}
          error={error}
        />
      );
    return patients.map((p) => {
      return (
        <div>
          <p>{p.name}</p>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Patient list</h1>
      <PatientListLoader />

      {/* 
      <h1>Patient</h1>
      {renderPatients()} */}
    </div>
  );
}
