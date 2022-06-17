import {React, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { availableAction } from '../../redux/reducers/filters';
import style from './available.module.scss'

const Available = () => {
    const [state, setstate] = useState(false);
    const available = state === false ? '' : `&filter=available`
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(availableAction(available))///FIX JSON ?
    }, [available]);

    const setAvailable = () => {
        setstate(!state)
    }
    return (
        <div className={style.available}>
            <span>В наличии:</span>
            <input type="checkbox" 
            checked={state} 
            onChange={setAvailable}/>
        </div>
    );
}

export default Available;
