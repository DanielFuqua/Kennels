import React from "react";
import Animal from "./animal/Animal";
import "./animal/Animal.css";
import "./employee/Employee.css";
import "./customer/Customer.css";
import "./location/Location.css";
import Customer from "./customer/Customer";
import Employee from "./employee/Employee";
import Location from "./location/Location";

export default () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>

    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>

    <h2>Animals</h2>
    <article className="animal">
      <Animal />
      <Animal />
      <Animal />
    </article>
    <article className="employee">
      <Employee />
      <Employee />
      <Employee />
    </article>
    <article className="location">
      <Location />
      <Location />
    </article>
    <article className="customer">
      <Customer />
      <Customer />
      <Customer />
      <Customer />
    </article>
  </>
);
