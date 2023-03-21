import React, {FC} from 'react';
import s from "./ProjectItem.module.css";


export const ProjectItem: FC<{ reserved?: boolean }> = ({reserved}) => {
    return (

        <div className={s.commonBlock}>

                <div className={reserved ? s.projectImgReversed : s.projectImg}>
                    {/*<img src={exmpl} alt={"there will be project picture"}/>*/}
                </div>

            <div className={reserved ? s.projectContentReversed : s.projectContent}>
                <h3 className={s.projectTitle}>Project Title</h3>
                {/*<div className={s.projectDescription}>*/}
                <p className={s.projectDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis, debitis maxime! Corporis excepturi ipsa iure nobis temporibus. Commodi ducimus
                    incidunt, ipsam minima molestiae, molestias non odio quisquam sit vero vitae.</p>
                {/*</div>*/}
                <ul className={s.projectTechList}>
                    <li><a href={"/"}>React</a></li>
                    <li><a href={"/"}>CSS</a></li>
                    <li><a href={"/"}>Redux</a></li>
                </ul>
                <div className={s.projectLinks}>
                    <a href={"/"}>GitHub</a>
                </div>
            </div>
        </div>


    );
};

