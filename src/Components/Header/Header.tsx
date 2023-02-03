import React from 'react';
import s from "./Header.module.css"
import {Nav} from "./Nav/Nav";
import comStyles from "../../Common/Container/ContainerStyle.module.css"

export const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={comStyles.container}>
                <div className={s.header}>
                    <Nav/>
                </div>
            </div>
        </div>
    );
};
