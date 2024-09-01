// src/components/CardSwitcher.tsx
import React from 'react';
import styles from '../app/about/about.module.css';

interface CardSwitcherProps {
  cards: JSX.Element[];
  currentCard: number;
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>;
}

const CardSwitcher: React.FC<CardSwitcherProps> = ({ cards, currentCard, setCurrentCard }) => {
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
    </div>
  );
};

export default CardSwitcher;
