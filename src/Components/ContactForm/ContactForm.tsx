import React from 'react';
import s from "./ContactForm.module.css"
import comStyles from "../../Common/Container/ContainerStyle.module.css"
import {Form} from "./Form/Form";

export const ContactForm = () => {
    return (
        <div className={s.wrapper}>
            <div className={comStyles.container}>
                <div className={s.formBlock}>
                    <Form/>
                </div>
            </div>
        </div>
    );
};

