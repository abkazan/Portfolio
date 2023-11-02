import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import styles from './viewmore.module.scss';
import projectData from '../components/new_project_data.json';
const ViewMore = () => {
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState('');
    useEffect(() => {
        console.log(project);
        const urlParams = new URLSearchParams(window.location.search);
        const projectToView = urlParams.get('project');
        const index = projectData.findIndex(obj => obj.title === projectToView);
        console.log(projectData[index]);

        setProject(projectData[index]);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])
    return (
        <>
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

                                

                                {/*  <div className={styles.list}>
                                    <h2>Tech Used:</h2>
                                    <ul>
                                        {project.tech.map((item) => (
                                            <li><p>{item}</p></li>
                                        ))}
                                    </ul>
                                </div>


                                <div className={styles.list}>
                                    <h2>Concepts Learned:</h2>
                                    <ul>
                                        {project.concepts.map((item) => (
                                            <li><p>{item}</p></li>
                                        ))}
                                    </ul>
                                </div> */}


                            </div>
                        </div>



                    </>
                )}
            </div>
        </>
    );
};
export default ViewMore;