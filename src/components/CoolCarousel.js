import React, { useState } from "react";
import styles from './coolCarousel.module.css';

const CoolCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dir, setDir] = useState(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 9);
        setDir('next');
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 9) % 9);
        setDir('prev');
    };

    const getRotationAngle = (index) => {
        // Calculate the rotation angle based on the current index
        /* console.log(dir, index, index * -40); */
        return index * -40; // Adjust this value to fit your design
    };
    const debug = () => {
        console.log(currentIndex);
        console.log(getRotationAngle(currentIndex));
    }
    return (
        <div className={styles["big-container"]}>
            <button onClick={handlePrev} className={styles['buttons']}>{'<'}</button>
            <button onClick={handleNext} className={styles['buttons']}>{'>'}</button>
            <button onClick={debug}>debug</button>
            <div className={styles["container"]}>
                <div className={styles["carousel"]} 
                style={{ transform: `rotateY(${getRotationAngle(currentIndex)}deg)`, transition: `transform 1s`}}>
                <div className={styles["carousel__face"]}><span>0</span></div>
                    <div className={styles["carousel__face"]}><span>1</span></div>
                    <div className={styles["carousel__face"]}><span>2</span></div>
                    <div className={styles["carousel__face"]}><span>3</span></div>
                    <div className={styles["carousel__face"]}><span>4</span></div>
                    <div className={styles["carousel__face"]}><span>5</span></div>
                    <div className={styles["carousel__face"]}><span>6</span></div>
                    <div className={styles["carousel__face"]}><span>7</span></div>
                    <div className={styles["carousel__face"]}><span>8</span></div>
                </div>
            </div>
        </div>
    );
};

export default CoolCarousel;
