import React from "react";
import style from './Register.module.css'
import { NavLink } from "react-router-dom"

const Register = (props) => {
    return (
        <section className={style.main} >
            <h2>Реєcтрація користувача</h2>
            <section>
                <input
                    value={props.user.lastname}
                    onChange={(e) =>
                        props.changeInputRegister('lastname', e.target.value)}
                    type="text" placeholder="Прізвище" />
                <input
                    value={props.user.name}
                    onChange={(e) =>
                        props.changeInputRegister('name', e.target.value)}
                    type="text" placeholder="Ім'я" />
                <input
                    value={props.user.username}
                    onChange={(e) =>
                        props.changeInputRegister('username', e.target.value)}
                    type="text" placeholder="Логін" />
                <input
                    value={props.user.password}
                    onChange={(e) =>
                        props.changeInputRegister('password', e.target.value)}
                    type="password" placeholder="Пароль" />
                <input
                    value={props.user.tel}
                    onChange={(e) => {
                        const inputValue = e.target.value;
                        const onlyDigits = inputValue.replace(/\D/g, '');
                        onlyDigits.length <= 10 &&
                            props.changeInputRegister('tel', onlyDigits);
                    }}
                    type="text" placeholder="Телефон" />
                <p>Уже були зареєстровані? <NavLink to='/login'>Увійти</NavLink></p>
                <button className="btn" onClick={() => props.handleSubmit()}>Зареєструвати</button>
            </section>
        </section>
    )
}

export { Register }