import {React, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import style from "./navbar.module.scss";

import { setAction } from '../../redux/reducers/filters';
import Available from '../../components/product-available/Available';
import Filter from '../../components/filter/Filter';
<<<<<<< HEAD
=======
import { curentPageAction } from '../../redux/reducers/weaponsReducer';
>>>>>>> add github.io



const Navbar = () => {
    const categories = ['Все','Алебарда', 'Арбалет', 'Бердыш', 'Бродэкс', 'Гладиус', 'Древко', 'Каролинг', 'Катана', 'Кинжал', 'Клинок', 'Кнут']
    const [state, setstate] = useState('Все');
    const dispatch = useDispatch()
    const category = state === 'Все' ? '' : `&category=${state}`

    useEffect(() => {
        dispatch(setAction(category))
<<<<<<< HEAD
=======
        dispatch(curentPageAction(1))
>>>>>>> add github.io
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
            <Available/>
            <Filter/>
        </div>
    );
}

export default Navbar;
