import {React, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../../redux/reducers/filters';
import style from "./search.module.scss"

const Search = () => {
    const searchitem = useSelector(state => state.filters.search)
    console.log(searchitem, 'searchBAR');
    const [state, setstate] = useState('');
    const dispatch = useDispatch()
    const search = state === '' ? '' : `&search=${state}`
    
    useEffect(() => {
        dispatch(searchAction(search))
    }, [state]);

    const apply = (e) => {
        setstate(e.target.value)
    }

    const deny = () => {
        setstate('')
    }

    return (
        <div className={style.inputBlock}>
            <input type="text" 
            className={style.search} 
            value={state}
            onChange={apply}
            />
            
            <div className={state === '' ? style.hide : style.delete}
            onClick={deny}>x</div>
        </div>
    );
}

export default Search;
