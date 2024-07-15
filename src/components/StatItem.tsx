"use client";

import { useEffect, useState } from 'react';

// Define the type for the props
interface StatItemProps {
  end: number;
  title: string;
}

const StatItem = ({ end, title }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // animation duration in ms
    const increment = end / (duration / 16); // assuming 60fps

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end); // make sure to set the final value
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <div className="stat-item">
      <p className="text-7xl text-center text-white pb-8">{count}</p>
      <p className="text-sm text-center text-white">{title}</p>
    </div>
  );
};

export default StatItem;
