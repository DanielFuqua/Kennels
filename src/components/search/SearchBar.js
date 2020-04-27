import React, { useRef, useState } from "react";
import AnimalForm from "../animal/AnimalForm";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";

export const SearchBar = ({ setTerms }) => {
  const { terms } = useRef();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <button
        onClick={() => {
          const userId = localStorage.getItem("kennel_customer");
          if (userId) {
            toggle();
          }
        }}
      >
        Make Appointment
      </button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Admit Animal</ModalHeader>
        <ModalBody>
          <AnimalForm toggler={toggle} />
        </ModalBody>
      </Modal>

      <fieldset>
        <div className="form-group">
          <label htmlFor="searchTerms">Search:</label>
          <input
            onKeyUp={(e) => setTerms(e.target.value)}
            type="text"
            id="searchTerms"
            ref={terms}
            required
            autoFocus
            className="form-control"
          />
        </div>
      </fieldset>
    </>
  );
};
