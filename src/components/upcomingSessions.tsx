import React, { useState } from 'react';
import UpcomingSession from './upcomingSession';
import styles from './upcomingSessions.module.css';

// Define the type for a session
interface Session {
  headerText: string;
  subText: string;
  date: string;
  time: string;
}

// Update the component to accept sessions as props
interface UpcomingSessionsProps {
  sessions: Session[];
}

const UpcomingSessions: React.FC<UpcomingSessionsProps> = ({ sessions }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sessions.length);
  };

  return (
    <div className={styles.cardWrapper}>
      {sessions.map((session, index) => (
        <UpcomingSession key={index} {...session} isActive={index === activeIndex} index={index} />
      ))}
      <button className={styles.nextButton} onClick={handleNextClick}>
        Next Session
      </button>
    </div>
  );
};

export default UpcomingSessions;
