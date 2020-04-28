// import React, { useContext, useEffect, useState } from "react";
// import { AnimalContext } from "./AnimalProvider";
// import { LocationContext } from "../location/LocationProvider";
// import { CustomerContext } from "../customer/CustomerProvider";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import AnimalForm from "./AnimalForm";
// import Animal from "./Animal";
// import "./Animal.css";

// export default ({ searchTerms }) => {
//   const { animals } = useContext(AnimalContext);
//   const { locations } = useContext(LocationContext);
//   const { customers } = useContext(CustomerContext);

//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);

//   const [matchingAnimals, setFiltered] = useState([]);

//   useEffect(() => {
//     if (searchTerms !== "") {
//       const subset = animals.filter((animal) =>
//         animal.name.toLowerCase().includes(searchTerms)
//       );
//       setFiltered(subset);
//     } else {
//       setFiltered([]);
//     }
//   }, [searchTerms, animals]);

//   return (
//     <>
//       <h2>Animals</h2>

//       <Button
//         onClick={() => {
//           const userId = localStorage.getItem("kennel_customer");
//           if (userId) {
//             toggle();
//           }
//         }}
//       >
//         Make Appointment
//       </Button>

//       <div className="animals">
//         {matchingAnimals.map((anim) => {
//           const owner = customers.find((c) => c.id === anim.customerId);
//           const clinic = locations.find((l) => l.id === anim.locationId);

//           return (
//             <Animal
//               key={anim.id}
//               location={clinic}
//               customer={owner}
//               animal={anim}
//             />
//           );
//         })}
//       </div>
//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Admit Animal</ModalHeader>
//         <ModalBody>
//           <AnimalForm toggler={toggle} />
//         </ModalBody>
//       </Modal>
//     </>
//   );
// };
