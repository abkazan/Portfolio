import React from "react";
import styles from './coolbtn.module.scss';

export default function CoolBtn ({onClick}) {
    return (
        <button className={styles.btn} onClick={onClick}>Cool Button
            <span className={styles.top}></span>
            <span className={styles.right}></span>
            <span className={styles.bottom}></span>
            <span className={styles.left}></span>
        </button>
    )
};
