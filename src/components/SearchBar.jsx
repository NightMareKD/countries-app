import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search countries..."
      className="w-full p-2 border rounded shadow"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
