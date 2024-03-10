import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    if (visitedCountries.includes(country)) {
      const newVisitedCountries = visitedCountries.filter(
        (visitedCountry) => visitedCountry !== country
      );
      setVisitedCountries(newVisitedCountries);
    } else {
      // If it doesn't exist, add it to the array
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* Visited Country */}
      <div>
        <h4>Countries Visited: {visitedCountries.length}</h4>
        <ul className="visited-container">
          {visitedCountries.map((country) => (
            <div key={country.cca3} className="flag-container">
              <li>{country.name.common}</li>
              <img src={country.flags.png}></img>
            </div>
          ))}
        </ul>
      </div>
      <div className={"country-container"}>
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
