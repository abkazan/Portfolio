import React, { useState } from 'react';
import styles from './storyCarousel.module.scss';

const StoryCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dir, setDir] = useState('none');

  const handleNext = () => {
    setDir('right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 500)
    setTimeout(() => {
        
        setDir('none')
    }, 1000)
  };

  const handlePrev = () => {
    setDir('left');
    
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        setDir('none')
    }, 1000)
  };

  return (
    <div className={styles.cardCarousel}>
      <div className={`${styles.card} ${dir !== 'none' ? (dir === 'right' ? styles.next : styles.prev) : ''}`}>
        <p>{cards[currentIndex].text}</p>
        <img src={cards[currentIndex].value} alt="gif" />
      </div>
      <div className={styles.pagination}>
        <button className={styles.prevButton} onClick={handlePrev}>
          &lt; Prev
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default StoryCarousel;
