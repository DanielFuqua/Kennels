import React, { useState, useEffect } from "react";
import { LocationProvider } from "./location/LocationProvider";
import LocationList from "./location/LocationList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import EmployeeList from "./employee/EmployeeList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import CustomerList from "./customer/CustomerList";
import { SearchBar } from "./search/SearchBar";
import { SearchResults } from "./search/SearchResults";
import "./Layout.css";
import "./Kennel.css";

export default () => {
  const [searchTerms, setTerms] = useState(null);
  const [activeList, setActiveList] = useState("locations");
  const [components, setComponents] = useState();

  const showLocations = () => (
    <LocationProvider>
      <LocationList />
    </LocationProvider>
  );

  const showCustomers = () => (
    <CustomerProvider>
      <CustomerList />
    </CustomerProvider>
  );

  const showEmployees = () => (
    <LocationProvider>
      <EmployeeProvider>
        <EmployeeList />
      </EmployeeProvider>
    </LocationProvider>
  );

  /*
        This effect hook determines which list is shown
        based on the state of the `activeList` variable.
    */
  useEffect(() => {
    if (activeList === "customers") {
      setComponents(showCustomers);
    } else if (activeList === "locations") {
      setComponents(showLocations);
    } else if (activeList === "employees") {
      setComponents(showEmployees);
    }
  }, [activeList]);

  return (
    <>
      <div className="mainContainer">
        <div className="searchContainer">
          <AnimalProvider>
            <EmployeeProvider>
              <LocationProvider>
                <CustomerProvider>
                  <SearchBar setTerms={setTerms} />
                  <SearchResults searchTerms={searchTerms} />
                </CustomerProvider>
              </LocationProvider>
            </EmployeeProvider>
          </AnimalProvider>
        </div>
        <div className="dataContainer">
          <h2>Nashville Kennels</h2>
          <small>Loving care when you're not there.</small>
          <div className="listContainer">
            <div className="links">
              <div
                className="fakeLink href"
                onClick={() => setActiveList("locations")}
              >
                Locations
              </div>
              <div
                className="fakeLink href"
                onClick={() => setActiveList("customers")}
              >
                Customers
              </div>
              <div
                className="fakeLink href"
                onClick={() => setActiveList("employees")}
              >
                Employees
              </div>
            </div>
            <div className="linkDisplay">{components}</div>
          </div>
        </div>
      </div>
    </>
  );
};
