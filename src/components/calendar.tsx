"use client";
import React, { useState } from 'react';
import styles from './calendar.module.css';

const Calendar = () => {
  const [month, setMonth] = useState(11); // November
  const [year, setYear] = useState(2024);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const daysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const prevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const getStartingDay = (year: number, month: number): number => {
    const firstDayOfMonth = new Date(year, month, 1);
    return firstDayOfMonth.getDay(); // 0 is Sunday
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={prevMonth}>&#10096;</button>
        <span>{new Date(year, month, 1).toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>
        <button onClick={nextMonth}>&#10097;</button>
      </div>
      <div className={styles.daysOfWeek}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.dayOfWeek}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.daysOfMonth}>
        {Array.from({ length: daysInMonth(month, year) }, (_, i) => i + 1).map((day) => {
          const startingDay = getStartingDay(year, month);
          const dayIndex = day + startingDay - 1; // Adjust for starting day
          const isCurrentDay = new Date().getDate() === day && new Date().getMonth() === month && new Date().getFullYear() === year;

          return (
            <div key={day} className={styles.dayOfMonth}>
              {dayIndex >= 0 ? (
                <span className={`${isCurrentDay ? styles.currentDay : ''}`}>{day}</span>
              ) : (
                <span>&nbsp;</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
