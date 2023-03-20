import React from 'react';
import s from "./Projects.module.css"
import {ProjectItem} from "./ProjectItem/ProjectItem";
import comStyles from "../../Common/Container/ContainerStyle.module.css"
import {Title} from "../../Common/Title/Title";

export const Projects = () => {
    return (
        <div className={s.wrapper}>
            <div className={comStyles.container}>
                <div className={s.projectBlock}>
                   <Title text={"Some Things I’ve Built"}/>
                    <div className={s.projects}>
                        <ProjectItem/>
                        <ProjectItem reserved/>
                        <ProjectItem/>
                        <ProjectItem reserved/>
                    </div>
                </div>

            </div>
        </div>
    );
};
