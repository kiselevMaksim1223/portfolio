import React from 'react';
import s from "./Footer.module.css"
import comStyles from "../../Common/Container/ContainerStyle.module.css"

export const Footer = () => {
    return (
        <div className={s.wrapper}>
            <div className={comStyles.container}>
                <div className={s.footer}>
                    <h4>Kiselev Maksim</h4>
                    <ul className={s.media}>
                        <li><a href={""}>1</a></li>
                        <li><a href={""}>2</a></li>
                        <li><a href={""}>3</a></li>
                        <li><a href={""}>4</a></li>
                        <li><a href={""}>5</a></li>
                    </ul>
                    <p>© 2023 All right reserved</p>
                </div>
            </div>
        </div>
    );
};
