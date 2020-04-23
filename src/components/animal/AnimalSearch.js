import React, { useRef } from "react";
import "./Animal.css";
import { AnimalContext } from "./AnimalProvider";

export default () => {
  const search = useRef();
  const { setSearchTerm } = React.useContext(AnimalContext);

  return (
    <input
      type="text"
      ref={search}
      className="input--animalSearch"
      onKeyUp={(e) => setSearchTerm(search.current.value)}
      name="animalSearch"
      placeholder="Search for an animal by name"
    />
  );
};
