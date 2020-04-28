import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap";
import { EmployeeEditForm } from "./EmployeeEditForm";

export default ({ employee, location }) => {
  const [selectedEmployee, setEmployee] = useState({
    employee: { id: 0 },
    location: null,
  });
  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);
  return (
    <>
      <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {location.name}</div>
        <br></br>
        <div>
          <Button
            color="info"
            onClick={() => {
              setEmployee({ employee, location });
              toggleEdit();
            }}
          >
            Edit
          </Button>
        </div>
      </section>
      <Modal isOpen={editModal} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>
          {selectedEmployee.employee.name}
        </ModalHeader>
        <ModalBody>
          <EmployeeEditForm
            key={selectedEmployee.employee.id}
            toggleEdit={toggleEdit}
            {...selectedEmployee}
          />
        </ModalBody>
      </Modal>
    </>
  );
};
