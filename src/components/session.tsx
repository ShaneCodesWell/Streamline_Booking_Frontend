"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link
import styles from './session.module.css';

const BookedCard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={styles.card}>
      {/* Main content */}
      <div className={styles.dayDate}>
        <div>Mon</div>
        <div>06</div>
      </div>

      <div className={styles.divider} />

      <div className={styles.time}>
        <div>9:00 AM</div>
        <div>10:00 AM</div>
      </div>

      <div className={styles.details}>
        <div className={styles.title}>
          How to write a convincing research Introduction
        </div>
        <div className={styles.status}>
          <div>Online</div>
        </div>
      </div>

      <div className={styles.instructor}>
        <div>Dr. Amos Oppong</div>
      </div>

      {/* Action Dropdown */}
      <div className={styles.actions}>
        <button
          className={styles.editButton}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Actions
        </button>

        {isDropdownOpen && (
          <ul className={styles.dropdown}>
            <li>
              {/* Use Next.js Link for client-side navigation */}
              <Link href="/tutor/sessions/sessionid">
                View
              </Link>
            </li>
            <li>Edit</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookedCard;
