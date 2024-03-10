import CountryData from "../CountryData/CountryData";

const CountryDetail = ({ country }) => {
  return (
    <div>
      <CountryData country={country}></CountryData>
    </div>
  );
};

export default CountryDetail;
