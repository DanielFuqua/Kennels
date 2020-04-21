import React from "react";

export default ({ customer }) => (
  <section className="customer">
    <h3 className="customer__name">{customer.name}</h3>
    <div className="customer_pet">{customer.address}</div>
  </section>
);
