import {React, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { availableAction } from '../../redux/reducers/filters';
import style from './available.module.scss'

const Available = () => {
    const [state, setstate] = useState(false);
    const available = state === false ? '' : `&filter=available`
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(availableAction(available))///FIX JSON ?
    }, [available]);

    // console.log(state, available);
    return (
        <div className={style.available}>
            <span>В наличии:</span>
            <input type="checkbox" 
            checked={state} 
            onChange={() => setstate(!state)}/>
        </div>
    );
}

export default Available;
