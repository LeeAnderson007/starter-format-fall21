import React from "react";
import { Card } from "semantic-ui-react";
import ListLoader from "../components/ListLoader";

export default function PatientListLoader() {
  return (
    <div>
      <h1>PatientListLoader</h1>
      <ListLoader
        url="/api/patients"
        renderData={(p) => {
          return (
            <Card>
              <p>{p.name}</p>
            </Card>
          );
        }}
      />
    </div>
  );
}
