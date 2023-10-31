import React from "react";
import styles from './hero.module.css';
import AnimePic from '../images/animecity.webp';
import ShootingStar from "./ShootingStar";

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>

            <div className={styles.hero}>
                <img src={AnimePic} alt="heropic" />
                <div className={styles.txt}>
                    <h3>We live in a crazy futuristic world with tons of opportunities at our fingertips...</h3>
                    <h3>...and I want to be one of the great minds who uses this
                        technology to create something new</h3>
                </div>
                
            </div>
            <div className={styles.stars}><ShootingStar /></div>
        </div>

    )
};
export default HeroSection;