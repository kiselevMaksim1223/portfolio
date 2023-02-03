import React from 'react';
import s from "./Form.module.css";

export const Form = () => {
    return (
        <form method={"post"} action={""} className={s.form}>
            <h2>Contact me</h2>
            <div className={s.nameBlock}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required/>
            </div>
            <div className={s.mailBlock}>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" required/>
            </div>
            <div className={s.textBlock}>
                <label htmlFor="email">Text your message :)</label>
                <textarea  name="message" required/>
            </div>
            <button className={s.button} type="submit">Send</button>
        </form>
    );
};

