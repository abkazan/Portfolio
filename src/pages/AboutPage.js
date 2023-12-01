import React from "react";


import styles from './about.module.css';

import SlidingElement from "../components/SlidingElement";


const languages = ['Python', 'HTML/CSS', 'Javascript', 'ReactJS', 'ExpressJS', 'NodeJS', 'Pandas', 'Pytorch', 'Flask'];
const concepts = ['Web development', 'Object-oriented programming', 'Data Structures',
                    'Testing and Debugging',
                    'Code Architecure',
                    'Cyber Security',
                    'Agile/scrum practices',
                    'Data analysis/maintenence', 'Unit Tests']
const software = ['VSCode', 'Github', 'Linux Terminal','Figma', 'Firebase', 'Google Cloud','Google Slides', 'Microsoft Word','Microsoft Excel']



const AboutPage = () => {
    return (
        
            <div className={styles.page}>
                <h1 className={styles.sectionHeading}>My Skills</h1>
                <h1 className={styles.pageHeading}>I am a Milwaukee-based, independent software developer with the following specialties:</h1>
                {/* <LoopingList items={languages} direction={'left'}/> */}
                {/* <LoopingList items={software} direction={'left'} delay={true}/> */}
                <SlidingElement title = {"Languages/frameworks/libraries:"}items={languages} dir={'left'}/>
                <SlidingElement title = {"Programming Concepts:"}items={concepts} dir={'right'}/>
                <SlidingElement title = {"Software:"}items={software} dir={'left'}/>
                
                {/* <SlidingElement title = {"Programming Concepts:"} items={concepts} dir={'right'}/>
                <SlidingElement title = {"Software:"} items={software} dir={'left'} delay={true}/> */}
                {/* <Story /> */}
                
               {/*  <HeroSection /> */}
            </div>

        
    );
};

export default AboutPage;
