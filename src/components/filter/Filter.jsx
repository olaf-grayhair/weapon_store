import {React, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortAction } from '../../redux/reducers/filters';

const Filter = () => {
    const [state, setstate] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sortAction(state))
        console.log('fetchpage');
    }, [state]);

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
