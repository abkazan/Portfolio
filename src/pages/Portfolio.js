import React from "react";
import CardCarousel from "../components/CardCarousel";
import styles from './portfolio.module.scss';
const Portfolio = () => {
    return (
            <div className={styles.page}>
                <h1 className={styles.heading}>My Portfolio</h1>
                <CardCarousel />
                <h1 className={styles.subheading}>Curious for more? Explore my <a href="https://github.com/abkazan/My-Code" target="_blank" rel="noreferrer">GitHub</a> for a code journey!</h1>
            </div>
    );
};

export default Portfolio;