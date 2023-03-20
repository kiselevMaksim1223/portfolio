import React, {FC} from 'react';
import s from "./Title.module.css"

export const Title:FC<{text:string}> = ({text}) => {
    return (
        <div className={s.title}>
            <h2>{text}</h2>
        </div>
    );
};
