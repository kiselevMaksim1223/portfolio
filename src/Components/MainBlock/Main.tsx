import React from 'react';
import s from "./Main.module.css"
import comStyles from "../../Common/Container/ContainerStyle.module.css"

export const Main = () => {
    return (
        <div className={s.wrapper}>
            <div className={comStyles.container}>
                <div className={s.mainBlock}>
                    <div className={s.greetText}>
                        <div className={s.greetBegin}><span>Hi, my name is</span></div>
                        <div className={s.greetName}><h1>Maksim Kiselev.</h1></div>
                        <div className={s.greetEnd}><p>I build things for the web.</p></div>
                    </div>
                    <div className={s.photo}>

                    </div>
                </div>
            </div>
        </div>
    );
};

