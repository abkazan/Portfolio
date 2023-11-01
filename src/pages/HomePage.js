import { useState, useEffect } from 'react';
import React from "react";
import styles from './home.module.scss';


//import ShootingStar from "./ShootingStar";

/* import ProfilePic from './images/profile-pic.webp'; */
import githubLogo from '../images/github-icon.webp';
import linkedinLogo from '../images/linkedin-icon.webp';
import Loader from '../components/Loader';

const HomePage = () => {

    const [imageLoaded, setImageLoaded] = useState(true);
    const [imgUrl, setImgUrl] = useState(""); // The URL of the image

    useEffect(() => {
        // Pre-load the image in the background
        const image = new Image();
        image.src = "https://firebasestorage.googleapis.com/v0/b/database-bb490.appspot.com/o/Profile_Pic.webp?alt=media&token=0b7141dd-c3cf-4a7b-8476-9fb7ecde11b0"; // Replace with the actual image URL

        image.onload = () => {
            setImgUrl(image.src); // Once the image is loaded, set the URL
            setTimeout(() => {
                setImageLoaded(true);
            }, 2000);
            // Mark the image as loaded
        };
    }, []);

    return (
        <>
            <div className={styles.page}>
                {imageLoaded ? (
                    <>
                        <h1 className={styles.heading}>Hello, My name is Andrew Kazan!</h1>
                        <div className={styles.imgAndTxt}>
                            <div className={styles.imgContainer}>
                                <img src={imgUrl} alt="Profile Pic" />
                            </div>
                            <div className={styles.txtContainer}>
                                <p>Are you looking for a junior developer who can also share his thoughts in an intelligent,
                                    articulate and personable way? I'm your guy!</p>
                                <div className={styles.socials}>
                                    <a href="https://www.linkedin.com/in/andrew-kazan-b5211b20a/" target="_blank" rel="noreferrer">
                                        <img src={linkedinLogo} alt="linkedin" />
                                    </a>
                                    <a href="https://github.com/abkazan/My-Code" target="_blank" rel="noreferrer">
                                        <img src={githubLogo} alt="github" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </>
                ) : (
                    <div className={styles.loader}>
                        <Loader />
                        <h1>Loading...</h1>
                    </div>
                )}



            </div>





        </>
    );
}
export default HomePage;