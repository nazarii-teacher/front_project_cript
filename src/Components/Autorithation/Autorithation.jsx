import React from "react";
import style from './Autorithation.module.css'
import { NavLink } from "react-router-dom"

const Autorithation = (props) => {

    return (
        <section className={style.main}>
            <h2>Авторизація</h2>
            <section>
                <input type="text"
                    value={props.username}
                    onChange={(e) => props.setUserName(e.target.value)}
                    placeholder="Логін"
                />
                <input type="text"
                    value={props.password}
                    onChange={(e) => props.setPassword(e.target.value)}
                    placeholder="Пароль"
                />
                <p>Ще не маєте облікового запису? <NavLink to='/reg'>Створити</NavLink></p>
                <button onClick={() => props.handlerLogin()} className="btn">Увійти</button>
                
            </section>
        </section>
    )
}

export { Autorithation }