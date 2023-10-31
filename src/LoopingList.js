import React from 'react';
import styles from './loop.module.css';



const LoopingList = (props) => {
  return (
    <div className={styles['looping-list-container']}>
      <ul className={`${styles['looping-list']} ${props.direction === 'left' ? styles['left'] : styles['right']}`}>
        {props.items.map((item, index) => (
          <li key={index}>
            {item}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default LoopingList;
