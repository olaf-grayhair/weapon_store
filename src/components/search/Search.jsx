import {React, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { searchAction } from '../../redux/reducers/filters';
import style from "./search.module.scss"

const Search = () => {
    const [state, setstate] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchAction(state))
    }, [state]);

    return (
        <div className={style.inputBlock}>
            <input type="text" 
            className={style.search} 
            value={state}
            onChange={(e) => setstate(e.target.value)}
            />
            
            <div className={state === '' ? style.hide : style.delete}
            onClick={() => setstate('')}>x</div>
        </div>
    );
}

export default Search;
