import React from 'react';

const CountryList = ({ countries, onSelectCountry }) => {
  if (countries.length > 10) {
    return <p>Too many matches, please input additional letters</p>;
  }

  if (countries.length === 1) {
    return null;
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name.common}>
          {country.name.common}
          <button onClick={() => onSelectCountry(country)}>Näytä</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
