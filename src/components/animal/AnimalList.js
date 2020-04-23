import React, { useContext, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import Animal from "./Animal";
import "./Animal.css";
import { LocationContext } from "../location/LocationProvider";
import { CustomerContext } from "../customer/CustomerProvider";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AnimalForm from "./AnimalForm";

export default () => {
  const { animals } = useContext(AnimalContext);
  const { locations } = useContext(LocationContext);
  const { customers } = useContext(CustomerContext);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <Button onClick={toggle}>Make Appointment</Button>
      <div className="animals">
        {animals.map((anim) => {
          const owner = customers.find((c) => c.id === anim.customerId);
          const clinic = locations.find((l) => l.id === anim.locationId);

          return (
            <Animal
              key={anim.id}
              location={clinic}
              customer={owner}
              animal={anim}
            />
          );
        })}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Admit Animal</ModalHeader>
        <ModalBody>
          <AnimalForm toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};
