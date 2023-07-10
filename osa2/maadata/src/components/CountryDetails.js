import React from 'react';
import Weather from './Weather';

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      <Weather capital={country.capital[0]} />
    </div>
  );
};

export default CountryDetails;
