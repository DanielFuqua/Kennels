import React from "react";

export default ({ animal, customer, location }) => (
  <section className="animal">
    <h3 className="animal__name">{animal.name}</h3>
    <div className="animal__breed">{animal.breed}</div>
    <div className="animal__breed">Location: {location.name}</div>
    <div className="animal__breed">Customer: {customer.name}</div>
  </section>
);
