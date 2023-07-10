import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryDetails from './components/CountryDetails';
import CountryList from './components/CountryList';

const App = () => {
  // State-muuttujat apikutsulle, syötteelle ja maalle
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);


// useEffect tekee apikutsun
  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  // Päivitetään searchstatea sitä mukaa kun syötettä annetaan
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedCountry(null);
  };

  // Valitun maan asettelu
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  // Maiden suodatus
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      Find countries: <input value={searchTerm} onChange={handleSearchChange} />
      <CountryList countries={filteredCountries} onSelectCountry={handleSelectCountry} />
      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  );
};

export default App;
