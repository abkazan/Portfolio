import React from "react";
import styles from './story.module.css';
import Button from "./Button";

const Story = () => {

    let storyTxt = "My favorite episode of my favorite show growing up was the SP-129 episode of Spongebob where Squidward time-travels to the future and everything is chrome and high-tech. My five year old brain thought this the coolest thing!"
        storyTxt += "At the same time, I began learning how to play video games where I quickly fell in love with Super Smash Bros, Mario Kart, and The Legend of Zelda."
        storyTxt += "I discovered my passion for working with technology when I took an class on electronic music production in high school. I quickly mastered the interface of garageband and fell in love with experimenting with differnet melodies, rhythms, effects, and instruments."
        storyTxt += "In college, I learned various programming languages, frameworks, and practices in the process of earning my computer science degree, and I can't wait to put these skills to use!"

    return (
        <>

            <div className={styles.container}>
                <h1 className={styles.heading}>My Story</h1>
                <h3 className={styles.subheading}>From video games to music production to learning code to fullstack software development...</h3>
                <h1>My favorite episode of my favorite show growing up was the SP-129 episode of Spongebob where Squidward time-travels to the future and everything is chrome and high-tech. My five year old brain thought this the coolest thing!</h1>
                <h1>At the same time, I began learning how to play video games where I quickly fell in love with Super Smash Bros, Mario Kart, and The Legend of Zelda.</h1>
                <h1>I discovered my passion for working with technology when I took an class on electronic music production in high school. I quickly mastered the interface of garageband and fell in love with experimenting with differnet melodies, rhythms, effects, and instruments</h1>
                <h1>In college, I learned various programming languages, frameworks, and practices in the process of earning my computer science degree, and I can't wait to put these skills to use!</h1>
                {/* <p>{storyTxt}</p> */}
            </div>
            {/* <Button /> */}

        </>
    )
};

export default Story;
