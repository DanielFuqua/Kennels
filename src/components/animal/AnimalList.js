import React, { useContext } from "react";
import { AnimalContext } from "./AnimalProvider";
import Animal from "./Animal";
import "./Animal.css";
import { LocationContext } from "../location/LocationProvider";
import { CustomerContext } from "../customer/CustomerProvider";

export default () => {
  const { animals } = useContext(AnimalContext);

  return (
    <div className="animals">
      {animals.map((anim) => (
        <Animal key={anim.id} animal={anim} />
      ))}
    </div>
  );
};
