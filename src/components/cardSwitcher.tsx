// src/components/cardSwitcher.tsx
import React, { useState } from 'react';
import styles from '../app/about/about.module.css';

interface CardSwitcherProps {
  cards: JSX.Element[];
}

const CardSwitcher: React.FC<CardSwitcherProps> = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleSeeMoreClick = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardWrapper}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${index === currentCard ? styles.cardFront : styles.cardBack}`}
          >
            {card}
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.seeMore} onClick={handleSeeMoreClick}>
            See More
        </button>
      </div>
    </div>
  );
};

export default CardSwitcher;
