import React, { useContext } from "react";
import "./Employee.css";
import { EmployeeContext } from "./EmployeeProvider";
import Employee from "./Employee";

export default () => {
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="employees">
      {employees.map((empl) => (
        <Employee key={empl.id} employee={empl} />
      ))}
    </div>
  );
};
