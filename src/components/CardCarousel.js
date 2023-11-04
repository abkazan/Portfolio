import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './cardcarousel.module.scss';
import projects from './new_project_data.json';
import CoolBtn from "./CoolBtn";
const CardCarousel = () => {
    const navivate = useNavigate();
    const goToViewMore = (title) => {
        console.log(`go to view more for ${title}`)
        const queryString = `project?project=${encodeURIComponent(title)}`;
        navivate(`/view-more/${queryString}`);
    };
    return (
        <div className={styles.container}>
            {projects.map((item) => (
                <div key={item}>
                    <div className={styles.content}>
                        <h3 className={styles.heading}>{item.title}</h3>
                        <span>{item.desc}</span>
                        <CoolBtn />
                    </div>
                </div>
            ))}

        </div>
    )
};
export default CardCarousel;