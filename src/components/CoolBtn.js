import React from "react";
import styles from './coolbtn.module.scss';

export default function CoolBtn () {
    return (
        <button className={styles.btn}>Cool Button
            <span className={styles.top}></span>
            <span className={styles.right}></span>
            <span className={styles.bottom}></span>
            <span className={styles.left}></span>
        </button>
    )
};
