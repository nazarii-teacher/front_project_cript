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
            <img src={img} alt="" />
            <h1>Система шифрування
            </h1>
            </div>
            
            <div className={`flex ${style.ul}`}>
                {state.map(item => <NavLink to={item.link}>{item.title}</NavLink>)}
            </div>
            <NavLink to='/auto'  className={`btn ${style.button_auto}`}>Почати</NavLink>
        </header>
    )
}

export { Header }