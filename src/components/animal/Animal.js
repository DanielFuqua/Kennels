import React from "react";

export default ({ animal }) => (
  <section className="animal">
    <h3 className="animal__name">{animal.name}</h3>
    <div className="animal__breed">{animal.breed}</div>
    <div className="animal__breed">Location: {animal.locationId}</div>
    <div className="animal__breed">Customer: {animal.customerId}</div>
  </section>
);
