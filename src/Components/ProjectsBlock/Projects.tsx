import React from 'react';
import s from "./Projects.module.css"
import {ProjectItem} from "./ProjectItem/ProjectItem";
import comStyles from "../../Common/Container/ContainerStyle.module.css"

export const Projects = () => {
    return (
        <div className={s.wrapper}>
            <div className={comStyles.container}>
                <div className={s.projectBlock}>
                    <h2 className={s.projectsBlockTitle}>Some Things I’ve Built (потом в desktop версии с помощью позиционирования правый блок на левый будет накладываться немного))</h2>
                    <div className={s.projects}>
                        <ProjectItem/>
                        <ProjectItem/>
                        <ProjectItem/>
                        <ProjectItem/>
                    </div>
                </div>

            </div>
        </div>
    );
};
