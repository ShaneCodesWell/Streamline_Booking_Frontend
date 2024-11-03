"use client";
import React, { useState } from 'react';
import LayoutLoggedIn from './../../layouts/LoggedInLayout';
import SearchBar from '@/components/SearchBar';
import ResultTable from '@/components/ResultTable';

export default function FindTutors() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      imageUrl: '/assets/images/Researcher-2.png',
      name: 'Guy Hawkins',
      title: 'PHD.',
      orcid: '0000-0002-7010-883X',
      scopusId: '12345678900',
    },
    {
      id: 2,
      imageUrl: '/assets/images/Researcher-4.png',
      name: 'Jane Doe',
      title: 'MD.',
      orcid: '0000-0003-4567-789X',
      scopusId: '98765432100',
    },
  ]);

  const originalResults = [...searchResults];
  const [isTabView, setIsTabView] = useState(false);

  const handleSearch = (query: string, filterType: string) => {
    if (!query) {
      setSearchResults(originalResults);
      return;
    }

    const filteredResults = originalResults.filter((tutor) => {
      switch (filterType) {
        case 'Name':
          return tutor.name.toLowerCase().includes(query.toLowerCase());
        case 'Title':
          return tutor.title.toLowerCase().includes(query.toLowerCase());
        case 'ORCID':
          return tutor.orcid.includes(query);
        case 'Scopus ID':
          return tutor.scopusId.includes(query);
        default:
          return true;
      }
    });

    setSearchResults(filteredResults);
  };

  const toggleView = () => {
    setIsTabView(!isTabView);
  };

  return (
    <LayoutLoggedIn>
      <div className='mx-auto max-w-7xl sm:px-4 lg:px-2'>
        <p className='text-[1.2em] font-medium' style={{ color: 'var(--text-color)' }}>Search for Tutors</p>
        <p className='text-[0.85em] font-medium mb-4' style={{ color: 'var(--text-color)' }}>Find all our Expert Research tutors here.</p>

        {/* Search bar with filter dropdown */}
        <div className='mb-6'>
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Toggle Button */}
        <div className="mb-4">
          <button
            onClick={toggleView}
            className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
          >
            Switch to {isTabView ? 'Table View' : 'Tab View'}
          </button>
        </div>

        {/* Conditional Rendering of Results */}
        <div>
          {isTabView ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((result) => (
                <div key={result.id} className="researcher-tab tab-1">
                  <div className="researcher-overlay">
                    <div className="researcher-info">
                      <p className="researcher-name">{result.name}</p>
                      <p className="researcher-title">{result.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ResultTable results={searchResults} />
          )}
        </div>
      </div>
    </LayoutLoggedIn>
  );
}
