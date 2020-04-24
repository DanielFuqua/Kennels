import React, { useState } from "react";
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

  return (
    <>
      <h2>Nashville Kennels</h2>
      <small>Loving care when you're not there.</small>

      <div className="mainContainer">
        <AnimalProvider>
          <EmployeeProvider>
            <LocationProvider>
              <CustomerProvider>
                <div className="searchContainer">
                  <SearchBar setTerms={setTerms} />
                  <SearchResults searchTerms={searchTerms} />
                </div>
                <div className="dataContainer">
                  <LocationList />
                  <CustomerList />
                  <EmployeeList />
                </div>
              </CustomerProvider>
            </LocationProvider>
          </EmployeeProvider>
        </AnimalProvider>
      </div>
    </>
  );
};
