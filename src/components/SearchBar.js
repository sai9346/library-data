import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by title, author, or genre"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
