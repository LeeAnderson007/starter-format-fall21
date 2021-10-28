import React from "react";
import { Button, Card } from "semantic-ui-react";
import ListLoader from "../components/ListLoader";

export default function Doctors() {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h1>Doctors List</h1>
      <Button>new Doctor</Button>?
      <ListLoader
        errorMessage={""}
        header={"Doctors"}
        url="/api/doctors"
        renderData={(doctor) => (
          <Card onClick={() => handleClick(doctor.id)}>
            <h1>{doctor.name}</h1>
          </Card>
        )}
      />
    </div>
  );
}
