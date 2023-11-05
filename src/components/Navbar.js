import { React, useState } from "react";
import styles from './nav.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [transition, setTransition] = useState(false);
    const handleClick = () => {
        setExpanded(!expanded);
        /* console.log(`current value of expanded: ${expanded}`); */
        if (transition) {
            setTransition(false);
        } else {
            setTimeout(() => {
                setTransition(true);
            }, 2000)
        }


    };
    const collapse = () => {
        setCollapsing(true);
        setTimeout(() => {
            setExpanded(false);
            setTransition(false);
            setCollapsing(false);
        }, 1000)

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
                                <li onClick={collapse} onKeyDown={dummy}><Link to='/' className={styles.a}>Home</Link></li>
                                <li onClick={collapse} onKeyDown={dummy}><Link to='/about' className={styles.a}>About</Link></li>
                                <li onClick={collapse} onKeyDown={dummy}><Link to='/portfolio' className={styles.a}>Portfolio</Link></li>
                                <li onClick={collapse} onKeyDown={dummy}><Link to='/contact' className={styles.a}>Contact</Link></li>
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