import React, { useState } from 'react';
import styles from './storyCarousel.module.scss';

const StoryCarousel = () => {
  const cards = [
    {text: "My favorite episode of my favorite show growing up was the SP-129 episode of Spongebob where Squidward time-travels to the future and everything is chrome and high-tech. My five year old brain thought this the coolest thing!", value: require('../images/gifs/future-spongebob.gif')},
    {text: "At the same time, I began learning how to play video games where I quickly fell in love with Super Smash Bros, Mario Kart, and The Legend of Zelda.", value: require('../images/gifs/wombo-combo.gif')},
    {text: "I discovered my passion for working with technology when I took an electronic music production class in high school. I quickly mastered the interface of Garageband and loved experimenting with differnet melodies, rhythms, effects, and instruments.", value: require('../images/gifs/zaytoven.gif')},
    {text: "In college, I learned various programming languages, frameworks, and practices in the process of earning my computer science degree. I can't wait to put these skills to use!", value: require('../images/gifs/monkey-coding.gif')}
  ];

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
      <h1>My Story</h1>
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
