import React from "react";

import HeroSection from "../components/HeroSection";
import styles from './about.module.css';

import SlidingElement from "../components/SlidingElement";

import StoryCarousel from "../components/StoryCarousel";
const languages = ['Python', 'HTML/CSS', 'Javascript', 'ReactJS', 'ExpressJS', 'NodeJS', 'Pandas', 'Pytorch', 'Flask'];
const concepts = ['Web development', 'Object-oriented programming', 'Data Structures',
                    'Testing and Debugging',
                    'Code Architecure',
                    'Cyber Security',
                    'Agile/scrum practices',
                    'Data analysis/maintenence']
const software = ['VSCode', 'Github', 'Linux Terminal','Figma', 'Firebase', 'Google Cloud','Google Slides', 'Microsoft Word','Microsoft Excel']

const cardContent = [
    {text: "My favorite episode of my favorite show growing up was the SP-129 episode of Spongebob where Squidward time-travels to the future and everything is chrome and high-tech. My five year old brain thought this the coolest thing!", value: require('../images/gifs/future-spongebob.gif')},
    {text: "At the same time, I began learning how to play video games where I quickly fell in love with Super Smash Bros, Mario Kart, and The Legend of Zelda.", value: require('../images/gifs/wombo-combo.gif')},
    {text: "I discovered my passion for working with technology when I took an electronic music production class in high school. I quickly mastered the interface of Garageband and loved experimenting with differnet melodies, rhythms, effects, and instruments.", value: require('../images/gifs/zaytoven.gif')},
    {text: "In college, I learned various programming languages, frameworks, and practices in the process of earning my computer science degree. I can't wait to put these skills to use!", value: require('../images/gifs/monkey-coding.gif')}
  ];

const AboutPage = () => {
    return (
        <>
            <div className={styles.page}>
                <h1 className={styles.pageTitle}>About Me:</h1>
              
                

                <h1 className={styles.pageHeading}>I am a Milwaukee-based, independent software developer with the following specialties:</h1>
                {/* <LoopingList items={languages} direction={'left'}/> */}
                {/* <LoopingList items={software} direction={'left'} delay={true}/> */}
                <SlidingElement title = {"Languages/frameworks/libraries:"}items={languages} dir={'left'}/>
                <SlidingElement title = {"Programming Concepts:"}items={concepts} dir={'right'}/>
                <SlidingElement title = {"Software:"}items={software} dir={'left'}/>
                
                {/* <SlidingElement title = {"Programming Concepts:"} items={concepts} dir={'right'}/>
                <SlidingElement title = {"Software:"} items={software} dir={'left'} delay={true}/> */}
                {/* <Story /> */}
                <h1 className={styles.storyHeading}>My Story</h1>
                <StoryCarousel cards={cardContent} />
                <HeroSection />
            </div>

        </>
    );
};

export default AboutPage;
