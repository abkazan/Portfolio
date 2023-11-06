import React from "react";
import CardCarousel from "../components/CardCarousel";
import styles from './portfolio.module.scss';
const Portfolio = () => {
    return (
        <>
            <div className={styles.page}>
                <h1 className={styles.heading}>Portfolio</h1>
                <CardCarousel />
                <h1 className={styles.subheading}>The code for these projects and more can be found on my <a href="https://github.com/abkazan/My-CodeGithub">Github</a></h1>
            </div>

        </>
    )
};

export default Portfolio;