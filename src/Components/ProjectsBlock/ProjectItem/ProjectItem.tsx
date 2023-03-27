import React, {FC} from 'react';
import s from "./ProjectItem.module.css";
import {TbBrandGithub} from "react-icons/tb"


type projectItemType = {
    img:string
    title:string
    description:string
    technologies:string[]
    githubLink:string
}

export const ProjectItem: FC<projectItemType> = ({img, technologies, title, description, githubLink}) => {

    return (
        <div className={s.commonBlock}>
            <div style={{backgroundImage:`url(${img})`}} className={s.projectImg}></div>
            <div className={s.projectContent}>
                <h3 className={s.projectTitle}>{title}</h3>
                <p className={s.projectDescription}>{description}</p>
                <ul className={s.projectTechList}>
                    {technologies.map(t => {
                       return <li>{t}</li>
                    })}

                </ul>
                <div className={s.projectLinks}>
                    <a href={githubLink}><TbBrandGithub size={25}/></a>
                </div>
            </div>
        </div>


    );
};

