import React, { useContext } from "react";
import "./Employee.css";
import { EmployeeContext } from "./EmployeeProvider";
import Employee from "./Employee";
import { LocationContext } from "../location/LocationProvider";

export default () => {
  const { employees } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);

  return (
    <div className="employees">
      {employees.map((empl) => {
        const clinic = locations.find((l) => l.id === empl.locationId);

        return <Employee key={empl.id} location={clinic} employee={empl} />;
      })}
    </div>
  );
};
