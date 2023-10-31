import React, {useState, useEffect} from "react";
import styles from './profile.module.css';
import ProfilePic from './images/profile-pic.webp';
import githubLogo from './images/github-icon.webp';
import linkedinLogo from './images/linkedin-icon.webp';
import Loader from './components/Loader';

const ProfileSection = () => {
   /*  const [width, setWidth] = useState(window.innerWidth); */
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        

    }, [])
    return (
        <>
        {loading ? (
            <div className={styles.loader}>
                <Loader />
            </div>
        ) : (
            <>
            <h1 className={styles.heading}>Hello, My name is Andrew Kazan!</h1>
            <div className={styles.hero}>
                
                    
            
                <div className={styles.container}>

                   
                    
                        <div className={styles.imgAndTxt}>
                            <img className={styles.pic} src={ProfilePic} alt="Profile Pic" />
                        <p>Are you looking for a junior developer who can also share his thoughts in an intelligent, 
                                                articulate and personable way? I'm your guy!</p>
                        </div>
                        
                
                
                    
                    <div className={styles.socials}>
                        <a href="https://www.linkedin.com/in/andrew-kazan-b5211b20a/" target="_blank" rel="noreferrer">
                            <img src={linkedinLogo} alt="linkedin" />
                        </a>
                        <a href="https://github.com/abkazan/My-Code" target="_blank" rel="noreferrer">
                            <img src={githubLogo} alt="github" />
                        </a>
                    </div>
                    <p>Contact me!</p>
                </div>


            </div>
            </>
            
        )}
            



        </>
    );
};
export default ProfileSection;