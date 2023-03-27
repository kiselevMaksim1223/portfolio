import React from 'react';
import s from "./Footer.module.css"
import comStyles from "../../Common/Container/ContainerStyle.module.css"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsTelegram} from "react-icons/bs"

export const Footer = () => {

    const mediaData = [
        {id:1, icon:<BsGithub size={"30px"} color={"#ccd6f6"}/>, link:"https://github.com/kiselevMaksim1223"},
        {id:2, icon:<BsLinkedin size={"30px"} color={"#ccd6f6"}/>, link: "https://www.linkedin.com/in/maksim-kiselev-1a1516259/"},
        {id:3, icon:<BsTelegram size={"30px"} color={"#ccd6f6"}/>, link: "https://t.me/beamer_boi"},
    ]

    return (
        <div className={s.wrapper}>
            <div className={comStyles.container}>
                <div className={s.footer}>
                    <h4>Kiselev Maksim</h4>
                    <ul className={s.media}>
                        {mediaData.map(elem => {
                            return <li key={elem.id}>
                                <a href={elem.link}>{elem.icon}</a>
                            </li>
                        } )}
                    </ul>
                    <p>© 2023 All right reserved</p>
                </div>
            </div>
        </div>
    );
};
