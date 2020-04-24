import React, { useState } from "react";
import { LocationProvider } from "./location/LocationProvider";
import LocationList from "./location/LocationList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import EmployeeList from "./employee/EmployeeList";
import { AnimalProvider } from "./animal/AnimalProvider";
import AnimalList from "./animal/AnimalList";
import { CustomerProvider } from "./customer/CustomerProvider";
import CustomerList from "./customer/CustomerList";
import { SearchBar } from "./search/SearchBar";
import { SearchResults } from "./search/SearchResults";
import "./Layout.css";

export default () => {
  const [searchTerms, setTerms] = useState(null);

  return (
    <>
      <h2>Nashville Kennels</h2>
      <small>Loving care when you're not there.</small>
      <address>
        <div>Visit Us at the Nashville North Location</div>
        <div>500 Puppy Way</div>
      </address>

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
                  <AnimalList searchTerms={searchTerms} />
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
