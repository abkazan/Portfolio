import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import styles from './viewmore.module.scss';
import projectData from '../components/new_project_data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ViewMore = () => {

    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const projectToView = urlParams.get('project');
        const index = projectData.findIndex(obj => obj.title === projectToView);
        setProject(projectData[index]);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, []);

    const [goingBack, setGoingBack] = useState(false);

    const goBack = () => {
        setGoingBack(true);
        setTimeout(() => {
            window.history.back()
        }, 700);
    }

    return (
        <>
            <button className={`${styles.backBtn} ${goingBack ? styles.goingBack : ''}`}
                onClick={goBack}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <div className={styles.page}>
                {loading ? (
                    <>

                        <div className={styles.loading}>
                            <h1>Loading...</h1>
                            <Loader />
                        </div>

                    </>
                ) : (
                    <>
                    
                        <h1>{project.title}</h1>

                        <div className={styles.container}>

                            <div className={styles.descAndImg}>
                                <p>{project.desc}</p>
                                <img src={project.img} alt="project img" />
                            </div>

                            <div className={styles.techAndConcepts}>
                                {Object.keys(project).map((key) => (
                                    typeof project[key] === 'object' && (
                                        <>

                                            <div className={styles.list}>
                                                <h2>{key}</h2>
                                                <ul>
                                                    {project[key].map((item, i) => (
                                                        <li key={i}>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                        </>
                                    )
                                ))}
                            </div>
                        </div>



                    </>
                )}
            </div>
        </>
    );
};

export default ViewMore;