import React from "react";
import styles from './ogCarousel.module.css';

const Og3dCarousel = () => {
    return (
        <>
        <div className={styles["container"]}>
                <div className={styles["carousel"]}>
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
        </>
    );
};
export default Og3dCarousel;
