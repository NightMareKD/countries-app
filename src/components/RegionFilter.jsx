import React from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const RegionFilter = ({ value, onChange }) => {
  return (
    <select
      className="w-full p-2 border rounded shadow"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Regions</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default RegionFilter;
