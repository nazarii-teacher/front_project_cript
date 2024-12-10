import React from "react"
import { NavLink } from "react-router-dom"
import style from './Lending.module.css'
import { useSelector } from "react-redux"
import img6 from './../../img/lending/section6.jpeg'
import img7 from './../../img/lending/section7.jpeg'
import person from './../../img/lending/person.png'
const Lending = () => {
    const state = useSelector(state => state.lending);
    return (
        <>
            <section className={style.section1}>
                <h2>Захистіть свої дані!</h2>
            </section>
            <section className={`flex_c ${style.section2}`}>
                <p>Чому обирати нас?</p>
                <hr />
                <h3>
                    Ми пропонуємо найсучасніші рішення для шифрування та захисту ваших даних. Безпека - наш пріоритет!
                </h3>
            </section>
            <section className={`flex_c ${style.section3}`}>
                <h3>Стенографія: Секрети в зображеннях</h3>
                <section>
                    {state.section3.map(item =>
                        <>
                            <div key={item.title}>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>

                            </div>
                            <hr />
                        </>
                    )}
                </section>
            </section>
            <section className={`flex_c ${style.section4}`}>
                <h2>Шифрування даних</h2>
                <hr />
                {state.section4.map(item =>
                    <div key={item.title}>
                        <h3>{item.title}</h3>
                        <hr />
                    </div>
                )}
            </section>
            <section className={`flex_c ${style.section2}`}>
                <h3>
                    Не чекайте, поки ваші дані стануть жертвою!  <br />Реєструйтеся зараз і захистіть свою інформацію!
                </h3>
                <NavLink className='btn' to='/reg'>Реєстрація</NavLink>
            </section>
            <section className={`flex_c  ${style.section6}`}>
                <img src={img6} alt="" />
                <div>
                    <p>Захистіть свої дані</p>
                    <hr />
                    <h3>
                        Станьте частиною революції!
                    </h3>
                    <NavLink className='btn' to='/reg'>Долучитися</NavLink>
                </div>
            </section>
            <section className={`flex_c  ${style.section7}`}>
                {state.section7.map(item =>
                    <div className="flex_c" key={item.title}>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        <hr />
                    </div>

                )}
                <img src={img7} alt="" />
            </section>
            <section className={`flex_c ${style.section2}`}>
                <p>Стенографія (LSB)</p>
                <hr />
                <h3>
                    Завантажте файл для шифрування та дешифрування. Легко і швидко!
                </h3>
                <div className={style.section8}>
                    {state.section8.map((item, i) =>
                        <div className="flex_c" key={item.title}>
                            <p>{`0${i + 1}`}</p>
                            <h2>{item.title}</h2>
                            <p className={style.max_size}>{item.text}</p>
                            <hr />
                        </div>

                    )}
                </div>
            </section>
            <section className={`flex_c  ${style.section9}`}>
                <h3>Про автора</h3>
                <div className='flex'>
                    <div className="flex_c">
                        <img src={person} alt="" />
                        <h2> Софія Леміщак</h2>
                    </div>
                    <div className={`flex_c ${style.avtor}`}>
                        <h4>Адреса:</h4>
                        <p>м. Броди, Коцюбинського 2</p>
                        <h4>Контакти:</h4>
                        <p>slemishchak@brodyg.ukr.education</p>
                        <p>+380 44 123 4567</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export { Lending }