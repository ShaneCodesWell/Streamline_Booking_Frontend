// src/components/FilterSidebar.tsx
import React from 'react';

type FilterSidebarProps = {
  filters: {
    title: string;
    orcid: string;
    scopusId: string;
  };
  onUpdateFilters: (newFilters: any) => void;
};

export default function FilterSidebar({ filters, onUpdateFilters }: FilterSidebarProps) {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <input
        type="text"
        placeholder="Filter by ORCID"
        value={filters.orcid}
        onChange={(e) => onUpdateFilters({ ...filters, orcid: e.target.value })}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
      <input
        type="text"
        placeholder="Filter by Scopus ID"
        value={filters.scopusId}
        onChange={(e) => onUpdateFilters({ ...filters, scopusId: e.target.value })}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
      <input
        type="text"
        placeholder="Filter by Title (e.g., PHD, MD)"
        value={filters.title}
        onChange={(e) => onUpdateFilters({ ...filters, title: e.target.value })}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  );
}
