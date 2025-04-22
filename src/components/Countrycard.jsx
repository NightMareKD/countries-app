import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="bg-primary rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 text-white">
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
        <p className="text-sm mb-1">
          <span className="font-medium">Population:</span>{' '}
          {country.population.toLocaleString()}
        </p>
        <p className="text-sm mb-1">
          <span className="font-medium">Region:</span> {country.region}
        </p>
        <p className="text-sm mb-1">
          <span className="font-medium">Capital:</span>{' '}
          {country.capital ? country.capital[0] : 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
