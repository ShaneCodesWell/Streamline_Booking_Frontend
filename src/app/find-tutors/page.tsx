// src/app/find-tutors/page.tsx
"use client";
import React, { useState } from 'react';
import LayoutLoggedIn from './../../layouts/LoggedInLayout';
import SearchBar from '@/components/SearchBar';
import ResultTable from '@/components/ResultTable'; // Import the ResultTable component

export default function FindTutors() {
  // State to hold search results
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
    // You can add more results or connect this with actual search logic later
  ]);

  return (
    <LayoutLoggedIn>
      <div className='mx-auto max-w-7xl sm:px-4 lg:px-2'>
        <p className='text-[1.2em] font-medium' style={{ color: 'var(--text-color)' }}>Search for Tutors</p>
        <p className='text-[0.85em] font-medium mb-4' style={{ color: 'var(--text-color)' }}>Find all our Expert Research tutors here.</p>
        
        {/* Search bar */}
        <div className='mb-6'>
          <SearchBar />
        </div>

        {/* Results Table */}
        <div>
          <ResultTable results={searchResults} />
        </div>
      </div>
    </LayoutLoggedIn>
  );
}
