import React from "react"
import img from './../../img/logo_full.jpg'
import { NavLink } from "react-router-dom"
import style from './Header.module.css'
const Header = () => {
    const state = [
        { title: "Стенографія", link: "/stenografy" },
        { title: "Шифрування", link: "/crupto" },
        { title: "Дешифрування", link: "/decrupt" },
    ]
    return (
        <header className={style.header}>
            <div className={style.blok_img}>
                <NavLink to='/' className={style.no_anim}>
                    <img src={img} alt="-_*" />
                    <h1>Система шифрування </h1>
                </NavLink>
            </div>

            <div className={`flex ${style.ul}`}>
                {state.map(item => <NavLink to={item.link}>{item.title}</NavLink>)}
            </div>
            <NavLink to='/login' className={`btn ${style.button_auto}`}>Почати</NavLink>
        </header>
    )
}

export { Header }