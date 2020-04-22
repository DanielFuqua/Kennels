import React, { useContext } from "react";
import { AnimalContext } from "./AnimalProvider";
import Animal from "./Animal";
import "./Animal.css";
import { LocationContext } from "../location/LocationProvider";
import { CustomerContext } from "../customer/CustomerProvider";

export default () => {
  const { animals } = useContext(AnimalContext);
  const { locations } = useContext(LocationContext);
  const { customers } = useContext(CustomerContext);
  return (
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
  );
};
