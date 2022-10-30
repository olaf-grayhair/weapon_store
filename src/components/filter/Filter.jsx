import {React, useState, useEffect} from 'react';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
=======
import { useDispatch, useSelector } from 'react-redux';
>>>>>>> add github.io
import { sortAction } from '../../redux/reducers/filters';

const Filter = () => {
    const [state, setstate] = useState('');
    const dispatch = useDispatch()
<<<<<<< HEAD
    
    useEffect(() => {
        dispatch(sortAction(state))
    }, [state]);
    // console.log(state);
=======

    useEffect(() => {
        dispatch(sortAction(state))
        console.log('fetchpage');
    }, [state]);

>>>>>>> add github.io
    return (
        <div>
            <select onChange={(e) => setstate(e.target.value)}>
                <option value="relavation">По алфавиту</option>
                <option value="priceUp">Цена вверх</option>
                <option value="priceDown">Цена вниз</option>
            </select>
        </div>
    );
}

export default Filter;
