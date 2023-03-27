import React from 'react';
import s from "./Projects.module.css"
import {ProjectItem} from "./ProjectItem/ProjectItem";
import comStyles from "../../Common/Container/ContainerStyle.module.css"
import {Title} from "../../Common/Title/Title";
import taskScheduler from "../../assets/img/ProjectImg/taskScheduler.png"
import hotel from "../../assets/img/ProjectImg/Hotel.png"


export const Projects = () => {

    const projectBlockData = [
        {
            id: 1,
            img: taskScheduler,
            title: "Task Scheduler",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                    Blanditiis, debitis maxime! Corporis excepturi ipsa iure nobis temporibus. Commodi ducimus\n" +
                "                    incidunt, ipsam minima molestiae, molestias non odio quisquam sit vero vitae.",
            technologies: ["React", "Redux", "MUI", "Axios", "react-router-dom", "TS"],
            githubLink: "https://github.com/kiselevMaksim1223/taskScheduler"
        },
        {
            id: 2,
            img: hotel,
            title: "Hotel",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                    Blanditiis, debitis maxime! Corporis excepturi ipsa iure nobis temporibus. Commodi ducimus\n" +
                "                    incidunt, ipsam minima molestiae, molestias non odio quisquam sit vero vitae.",
            technologies: ["React", "Redux", "styled-components", "react-router-dom", "TS"],
            githubLink: "https://github.com/kiselevMaksim1223/guest-house"
        },
    ]

    return (
        <div className={s.wrapper}>
            <div className={comStyles.container}>
                <div className={s.projectBlock}>
                    <Title text={"Some Things I’ve Built"}/>
                    <div className={s.projects}>
                        {projectBlockData.map(pi => {
                                return (
                                    <ProjectItem
                                        img={pi.img}
                                        title={pi.title}
                                        description={pi.description}
                                        technologies={pi.technologies}
                                        githubLink={pi.githubLink}
                                    />
                                )
                            }
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};
