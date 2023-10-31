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
                    'Agile/scrum practices and methodologies',
                    'Data analysis/maintenence']
const software = ['VSCode', 'Github', 'Figma', 'Firebase', 'Google Cloud, Docs, Slides, Sheets, Forms', 'Microsoft Excel, Powerpoint, Word, Propresenter', 'iMovie', 'Logic Pro X']

const cardContent = [
    {text: "My favorite episode of my favorite show growing up was the SP-129 episode of Spongebob where Squidward time-travels to the future and everything is chrome and high-tech. My five year old brain thought this the coolest thing!", value: require('../images/gifs/future-spongebob.gif')},
    {text: "At the same time, I began learning how to play video games where I quickly fell in love with Super Smash Bros, Mario Kart, and The Legend of Zelda.", value: require('../images/gifs/wombo-combo.gif')},
    {text: "I discovered my passion for working with technology when I took an class on electronic music production in high school. I quickly mastered the interface of garageband and fell in love with experimenting with differnet melodies, rhythms, effects, and instruments.", value: require('../images/gifs/zaytoven.gif')},
    {text: "In college, I learned various programming languages, frameworks, and practices in the process of earning my computer science degree, and I can't wait to put these skills to use!", value: require('../images/gifs/monkey-coding.gif')}
  ];

const AboutPage = () => {
    return (
        <>
            <div className={styles.page}>
                
                {/* <div className={styles.container}>
                    <ul className={styles.list}>
                        <h3>Languages/libraries/frameworks:</h3>
                        <li>
                            <p>Python</p>

                             <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"} alt="python logo" />
                        </li>
                        <li>
                            <p>HTML/CSS/Javascript</p>
                            <img src={"https://banner2.cleanpng.com/20180730/ghy/kisspng-logo-cascading-style-sheets-html5-css3-prags-h-python-stickers-5b5ed2621e52c3.0848753715329408981242.jpg"} alt="html-css-js logo" /> 
                        </li>
                        <li>ReactJs</li>
                        <li>ExpressJs</li>
                        <li>NodeJs</li>
                        <li>Pandas</li>
                        <li>Pytorch</li>
                        <li>Flask</li>
                    </ul>

                    <ul className={styles.list}>
                        <h3>Programming Concepts:</h3>
                        <li>Web development</li>
                        <li>Object-oriented programming</li>
                        <li>Data Structures</li>
                        <li>Testing and Debugging</li>
                        <li>Code Architecure</li>
                        <li>Cyber Security</li>
                        <li>Agile/scrum practices and methodologies</li>
                        <li>Data analysis/maintenence</li>
                    </ul>
                    <ul className={styles.list}>
                        <h3>Software:</h3>
                        <li>VSCode</li>
                        <li>Github</li>
                        <li>Figma</li>
                        <li>Firebase</li>
                        <li>Google Cloud, Docs, Slides, Sheets, Forms</li>
                        <li>Microsoft Excel, Powerpoint, Word, Propresenter</li>
                        <li>iMovie</li>
                        <li>Logic Pro X</li>
                    </ul>

                </div> */}
                
                {/* <h2 className={styles.glitch} data-glitch="Glitch text">Glitch text</h2> */}
                {/* <h2 className={styles.text3d}>3d text</h2> */}
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
