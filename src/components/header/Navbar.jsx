import React from 'react';
import style from "./navbar.module.scss";

const Navbar = () => {
    const categories = ['Алебарда', 'Арбалет', 'Бердыш', 'Бродэкс', 'Гладиус', 'Древко', 'Каролинг', 'Катана', 'Кинжал', 'Клинок', 'Кнут', 'Лук', 'Меч']

    return (
        <div>
            <ul className={style.navbar}>
            {categories.map((el, index) => (
                <li className={style.item} key={index}>{el}</li>
            ))}
            </ul>
        </div>
    );
}

export default Navbar;
