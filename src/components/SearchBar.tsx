import React from 'react';
import 'boxicons/css/boxicons.min.css';
import styles from './searchbar.module.css';

const SearchBar = () => {
    return (
      <div className="flex items-center space-x-4 w-full">
        <div className={styles.searchContainer}>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="E.g. Shane Mensah" className={styles.searchInput} />
        </div>
        <button className="bg-[#3782FB] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#2d6fd7] transition-colors">
          Search
        </button>
      </div>
    );
  };
  

export default SearchBar;
