import {React, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import style from "./search.module.scss"

const Search = () => {
    const [state, setstate] = useState('');
    const dispatch = useDispatch()
    useEffect(() => {

    }, []);
    console.log(state);
    return (
        <>
            <input type="text" 
            className={style.search} 
            value={state}
            onChange={(e) => setstate(e.target.value)}
            />
        </>
    );
}

export default Search;
