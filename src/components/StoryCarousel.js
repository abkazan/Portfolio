import React, { useState } from 'react';
import styles from './storyCarousel.module.scss';

const StoryCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dir, setDir] = useState('none');
  
  const handleClick = (currDir) => {
    
    setDir(currDir);

    setTimeout(() => {
      if (currDir === 'right') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
      }
      console.log(currentIndex);
    }, 750);

    setTimeout(() => {
      setDir('none');
    }, 1000);

  };
  
  return (
    <div className={styles.cardCarousel}>
      <div className={`${styles.card} ${dir !== 'none' ? (dir === 'right' ? styles.next : styles.prev) : ''}`}>
        <p>{cards[currentIndex].text}</p>
        <img src={cards[currentIndex].value} alt="gif" />
      </div>
      <div className={styles.pagination}>
        {/* <button onClick={debug}>debug</button> */}
        {currentIndex !== 0 && (
          <button className={styles.prevButton} onClick={() => handleClick('left')}>
          {`< Prev`}
        </button>
        )}
        
          <button className={styles.nextButton} onClick={() => handleClick('right')}>
          {(currentIndex === cards.length - 1 ) ? `Restart` : `Next >`}
        </button>
        
        
      </div>
    </div>
  );
};

export default StoryCarousel;
