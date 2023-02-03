import React from 'react';
import s from "./SkillItem.module.css"

type skillItemType ={
    title:string
    description:string
}

export const SkillItem = (props:skillItemType) => {
    return (
        <div className={s.skillItem}>
            <div className={s.icon}></div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

