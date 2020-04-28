import React, { useContext, useState } from "react";
import { LocationContext } from "../location/LocationProvider";
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeEditForm = ({ employee, toggleEdit }) => {
  const { locations } = useContext(LocationContext);
  const { updateEmployee } = useContext(EmployeeContext);

  // Separate state variable to track the emplyee as it is edited
  const [updatedEmployee, setEmployee] = useState(employee);

  /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
  const handleControlledInputChange = (event) => {
    const newEmployee = Object.assign({}, updatedEmployee);
    newEmployee[event.target.name] = event.target.value;
    setEmployee(newEmployee);
  };

  const editEmployee = () => {
    const locationId = parseInt(updatedEmployee.locationId);

    if (locationId === 0) {
      window.alert("Please select a location");
    } else {
      updateEmployee({
        id: updatedEmployee.id,
        name: updatedEmployee.name,
        address: updatedEmployee.address,
        locationId: locationId,
      }).then(toggleEdit);
    }
  };

  return (
    <form className="employeeEditForm">
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee name: </label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            placeholder="Employee name"
            defaultValue={employee.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Employee Address: </label>
          <input
            type="text"
            name="address"
            required
            className="form-control"
            placeholder="Employee address"
            defaultValue={employee.address}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationId">Location: </label>
          <select
            name="locationId"
            className="form-control"
            defaultValue={employee.locationId}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={(evt) => {
          evt.preventDefault();
          editEmployee();
        }}
      >
        Save Updates
      </button>
    </form>
  );
};
