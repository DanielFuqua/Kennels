import React from "react";

export default ({ animal, customer, location }) => (
  <section className="animal">
    <div className="animal__breed">{animal.breed}</div>
    <div className="animal_location">Checked-in at: {location.name}</div>
    <div className="animal__owner">Owner: {customer.name}</div>
  </section>
);
