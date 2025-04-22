import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <img src={country.flags.png} alt={country.name.common} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{country.name.common}</h2>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
    </div>
  );
};

export default CountryCard;
