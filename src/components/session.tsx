import React from 'react';
import styles from './session.module.css';

const BookedCard = () => {
  return (
    <div className={styles.card}>
      {/* First Section: Day and Date */}
      <div className={styles.dayDate}>
        <div>Mon</div>
        <div>06</div>
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Second Section: Time */}
      <div className={styles.time}>
        <div>9:00 AM</div>
        <div>10:00 AM</div>
      </div>

      {/* Third Section: Title and Status */}
      <div className={styles.details}>
        <div className={styles.title}>
          How to write a convincing research Introduction
        </div>
        <div className={styles.status}>
          <div>Online</div>
        </div>
      </div>

      {/* Fourth Section: Instructor */}
      <div className={styles.instructor}>
        <div>Dr. Amos Oppong</div>
      </div>

      {/* Fifth Section: Dropdown button */}
      <div className={styles.actions}>
        <button className={styles.editButton}>Edit</button>
      </div>
    </div>
  );
};

export default BookedCard;
