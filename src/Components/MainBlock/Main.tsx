import React from 'react';
import s from "./Main.module.css"
import comStyles from "../../Common/Container/ContainerStyle.module.css"

export const Main = () => {
    return (
        <div className={s.wrapper}>
            <div className={comStyles.container}>
                <div className={s.mainBlock}>
                    <div className={s.greetText}>
                        <span>Hi there</span>
                        <h1>I`m Max</h1>
                        <p>Front End Developer</p>
                    </div>
                    <div className={s.photo}>

                    </div>
                </div>
            </div>
        </div>
    );
};

