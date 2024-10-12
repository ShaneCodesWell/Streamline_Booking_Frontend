import React from 'react';
import Image from 'next/image';

interface UserResult {
  id: number;
  imageUrl: string;
  name: string;
  title: string;
  orcid: string;
  scopusId: string;
}

interface ResultTableProps {
  results: UserResult[];
}

const ResultTable: React.FC<ResultTableProps> = ({ results }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200" style={{ border: '1px solid var(--pub-outline-color)', backgroundColor: 'var(--body-color)' }}>
      <table
        className="min-w-full border-collapse rounded-lg"
        style={{
          border: 'none',
          backgroundColor: 'var(--body-color)',
        }}
      >
        <thead>
          <tr className="text-left" style={{ backgroundColor: 'var(--body-color)' }}>
            <th className="px-4 py-2 text-left text-[0.85em] font-medium" style={{ color: 'var(--text-color)' }}></th>
            <th className="px-4 py-2 text-left text-[0.85em] font-medium" style={{ color: 'var(--text-color)', borderTopLeftRadius: '0.5rem' }}>User</th>
            <th className="px-4 py-2 text-left text-[0.85em] font-medium" style={{ color: 'var(--text-color)' }}>Title</th>
            <th className="px-4 py-2 text-left text-[0.85em] font-medium" style={{ color: 'var(--text-color)' }}>ORCID</th>
            <th className="px-4 py-2 text-left text-[0.85em] font-medium" style={{ color: 'var(--text-color)', borderTopRightRadius: '0.5rem' }}>Scopus Author ID</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr
              key={result.id}
              className="border-t"
              style={{ border: '1px solid var(--pub-outline-color)' }}
            >
              <td className="px-4 py-2">
                <Image
                  src={result.imageUrl}
                  alt={result.name}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>
              <td className="px-4 py-2" style={{ color: 'var(--text-color)' }}>
                <p className="font-semibold">{result.name}</p>
              </td>
              <td className="px-4 py-2" style={{ color: 'var(--text-color)' }}>
                {result.title}
              </td>
              <td className="px-4 py-2" style={{ color: 'var(--text-color)' }}>
                {result.orcid}
              </td>
              <td className="px-4 py-2" style={{ color: 'var(--text-color)' }}>
                {result.scopusId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
