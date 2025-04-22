import React, { useEffect, useState } from 'react';
import CountryCard from '../components/Countrycard';
import SearchBar from '../components/SearchBar';
import RegionFilter from '../components/RegionFilter';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  const fetchCountries = async () => {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json();
      setCountries(data);
      setFilteredCountries(data);
    } catch (err) {
      console.error('Failed to fetch countries', err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    let result = countries;

    if (searchTerm) {
      result = result.filter(c =>
        c.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (region) {
      result = result.filter(c => c.region === region);
    }

    setFilteredCountries(result);
  }, [searchTerm, region, countries]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <RegionFilter value={region} onChange={setRegion} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
