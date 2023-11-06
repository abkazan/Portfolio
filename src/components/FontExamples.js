import React from 'react';
import styles from './fonts.module.scss';

export default function FontExamples() {
    return (
        <div className={styles.container}>
            <h1>Default font (Poppins)</h1>
            <h1 className={styles.roboto}>Roboto hello world</h1>
            <h1 className={styles.openSans}>Open Sans hello world</h1>
            <h1 className={styles.lato}>Lato hello world</h1>
            <h1 className={styles.montserrat}>Montserrat hello world</h1>
            <h1 className={styles.playfairDisplay}>Playfair Display hello world</h1>
            <h1 className={styles.nunito}>Nunito hello world</h1>
            <h1 className={styles.merriweather}>Merriweather hello world</h1>
            <h1 className={styles.alegreya}>Alegreya hello world</h1>
            <h1 className={styles.sourceSansPro}>Source Sans Pro hello world</h1>

        </div>
    );
};