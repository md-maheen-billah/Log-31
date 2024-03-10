import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>{name.common}</h3>
      <div className="flag-div">
        <img src={flags.png} alt="" />
      </div>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <CountryDetail country={country}></CountryDetail>
      <button
        onClick={() => {
          handleVisited();
          handleVisitedCountry(country);
        }}
      >
        {visited ? "Visited" : "Click if Visited"}
      </button>
    </div>
  );
};

export default Country;
