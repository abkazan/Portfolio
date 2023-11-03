import React, { useState, useEffect } from 'react';
import styles from './slide.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


const SlidingElement = ({ title, items, dir, delay }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [shrinking, setShrinking] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 6000); // Adjust the interval as needed

        return () => clearInterval(interval);
    }, [items]);

    const toggleOpen = () => {

        if (open) {
            setShrinking(true);
            setTimeout(() => {
                setShrinking(false);
                setOpen(!open);
            }, 1000)
        } else {
            setOpen(!open);
        }

    };


    return (
        <>


            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>{title}</h2>
                </div>
                <div className={`${styles.element} ${dir === 'left' ? styles.left : styles.right} ${delay ? styles.delay : ''}`}>
                    {items[currentIndex]}
                </div>
                <button className={styles.viewAllBtn} onClick={toggleOpen}>
                    <div className={`${styles.iconContainer} ${shrinking ? styles.shrinking : ''} ${open ? styles.open : ''}`}>
                        <FontAwesomeIcon icon={faCaretDown} className={styles.icon}/>
                    </div>
                    <h2>{`${open ? 'View Less' : 'View All'}`}</h2>
                </button>
            </div>

            <div className={`${styles.dropdown} ${shrinking ? styles.shrinking : ''} ${open ? styles.open : ''}`}>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            {/*  )} */}

        </>

    );
};

export default SlidingElement;
