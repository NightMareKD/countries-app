import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          🌍 Country Explorer
        </Link>

        {/* Optional future nav links */}
        {/* <nav className="space-x-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
