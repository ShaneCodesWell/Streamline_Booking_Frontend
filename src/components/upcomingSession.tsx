import React from 'react';
import styles from './upcomingSession.module.css';

interface UpcomingSessionProps {
  headerText: string;
  subText: string;
  date: string;
  time: string;
  isActive: boolean;
  isInactive: boolean; 
}

const UpcomingSession: React.FC<UpcomingSessionProps> = ({
  headerText,
  subText,
  date,
  time,
  isActive,
  isInactive, 
}) => {
  return (
    <div className={`${styles.card} ${isActive ? styles.cardActive : isInactive ? styles.cardInactive : ''}`}>
      <div className={styles.content}>
        <div className={styles.main}>
          <h2 className={styles.header}>{headerText}</h2>
          <p className={styles.subtext}>{subText}</p>
        </div>
        <div className={styles.divider} />
        <div className={styles.sessionInfo}>
          <div className={styles.date}>{date}</div>
          <div className={styles.time}>{time}</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSession;
