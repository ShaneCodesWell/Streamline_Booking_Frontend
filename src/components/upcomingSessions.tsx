import React, { useState } from 'react';
import UpcomingSession from './upcomingSession';
import styles from './upcomingSessions.module.css';

interface Session {
  headerText: string;
  subText: string;
  date: string;
  time: string;
}

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
        <UpcomingSession
          key={index}
          {...session}
          isActive={index === activeIndex}
          isInactive={index === (activeIndex + 1) % sessions.length}
        />
      ))}
      <button className={styles.nextButton} onClick={handleNextClick}>
        Next Session
      </button>
    </div>
  );
};

export default UpcomingSessions;
