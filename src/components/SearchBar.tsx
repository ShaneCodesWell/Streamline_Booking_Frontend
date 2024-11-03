import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import styles from './searchbar.module.css';

type SearchBarProps = {
  onSearch: (query: string, filterType: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('Name'); // Default filter

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery, filterType);
  };

  return (
    <div className="flex items-center space-x-4 w-full">
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="border rounded-md py-2 px-3 bg-white text-gray-700"
      >
        <option value="Name">Name</option>
        <option value="Title">Title</option>
        <option value="ORCID">ORCID</option>
        <option value="Scopus ID">Scopus ID</option>
      </select>

      <div className={styles.searchContainer}>
        <i className="bx bx-search"></i>
        <input
          type="text"
          placeholder={`Search by ${filterType}`}
          value={searchQuery}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
      </div>

      <button
        onClick={handleSearchClick}
        className="bg-[#3782FB] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#2d6fd7] transition-colors"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
