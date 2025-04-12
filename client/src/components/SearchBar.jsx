import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="px-4 py-2 rounded-md border w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
