import {React, useState, useEffect} from 'react';
import Filter from '../filter/Filter';
import style from "./navbar.module.scss";
import { useDispatch } from 'react-redux';
import { setAction } from '../../redux/reducers/filters';



const Navbar = () => {
    const categories = ['Все','Алебарда', 'Арбалет', 'Бердыш', 'Бродэкс', 'Гладиус', 'Древко', 'Каролинг', 'Катана', 'Кинжал', 'Клинок', 'Кнут', 'Меч']
    const [state, setstate] = useState('Все');

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAction(state))
    }, [state]);

    return (
        <div className={style.navbar__wraper}>
            <ul className={style.navbar}>
            {categories.map((el, index) => (
                <li 
                className={el !== state 
                    ? style.item 
                    : style.item__active}
                    onClick={() => setstate(el)}
                    key={index}
                >{el}</li>
            ))}
            </ul>
            <Filter/>
        </div>
    );
}

export default Navbar;
