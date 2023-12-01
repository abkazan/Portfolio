import { React, useState } from "react";
import styles from './nav.module.scss';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [transition, setTransition] = useState(false);
    const handleClick = () => {
        console.log('current, url: ', window.location.href.includes('view-more'));
        setExpanded(!expanded);
        /* console.log(`current value of expanded: ${expanded}`); */
        if (transition) {
            setTransition(false);
        } else {
            setTimeout(() => {
                setTransition(true);
            }, 1000)
        }


    };
    const collapse = () => {
        setCollapsing(true);
        setTimeout(() => {
            setExpanded(false);
            setTransition(false);
            setCollapsing(false);
        }, 800)
    };

    const dummy = () => {
        
        console.log('this function does nothing...');
    };

    const [collapsing, setCollapsing] = useState(false);
    return (


        <div className={
            `${styles.navbar} 
                 ${expanded ? styles.expanded : ''}  
                 ${collapsing ? styles.collapsing : ''}`}
            onClick={expanded ? dummy : handleClick} onKeyDown={dummy}>

            {expanded ? (
                <>
                <FontAwesomeIcon icon={faBars} className={`${styles.icon} ${transition ? styles.fadeOut : ''}`}/>
                
                {transition && (
                    <>
                         
                        <button className={`${styles.collapse} ${collapsing ? styles.collapsing : ''}`} onClick={collapse}>^</button>
                        <nav className={`${styles.links}  ${collapsing ? styles.collapsing : ''}`}>
                            <ul  onKeyDown={dummy}>
                                <li onClick={collapse} onKeyDown={dummy}><Link to='intro' smooth={true} duration={500} className={styles.a}>Intro</Link></li>
                                <li onClick={collapse} onKeyDown={dummy}><Link to='portfolio' smooth={true} duration={500} className={styles.a}>Portfolio</Link></li>
                                <li onClick={collapse} onKeyDown={dummy}><Link to='story' smooth={true} duration={500} className={styles.a}>My Story</Link></li>
                                <li onClick={collapse} onKeyDown={dummy}><Link to='skills' smooth={true} duration={500} className={styles.a}>My Skills</Link></li>
                                <li onClick={collapse} onKeyDown={dummy}><Link to='contact' smooth={true} duration={500} className={styles.a}>Contact</Link></li>
                            </ul>
                        </nav>
                    </>
                )}
                </>
                ) : (
                    <FontAwesomeIcon icon={faBars} className={styles.icon} />
                )}
        </div>


    );
};

export default Navbar;