import React from 'react';
import styles from './upcomingSession.module.css';

interface UpcomingSessionProps {
  headerText: string;
  subText: string;
  date: string;
  time: string;
  isActive: boolean;
  index: number;
}

const UpcomingSession: React.FC<UpcomingSessionProps> = ({ headerText, subText, date, time, isActive, index }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.card} ${isActive ? styles.active : ''}`} style={{ zIndex: 10 - index }}>
        <div className={styles.content}>
          <div className={styles.main}>
            <h3 className={styles.header}>{headerText}</h3>
            <p className={styles.subtext}>{subText}</p>
            <button className={styles.viewButton}>View</button>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.sessionInfo}>
            <p className={styles.date}>{date}</p>
            <p className={styles.time}>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSession;
