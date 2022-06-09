import {React, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { pagination } from "../../utils/page";
import style from "./pagination.module.scss"
import { curentPageAction } from "../../redux/reducers/weaponsReducer";

const Pagination = ({totalCount, perPage, currentPage, onClick}) => {
const [state, setstate] = useState(1);

const dispatch = useDispatch()

useEffect(() => {
    dispatch(curentPageAction(state))
}, [state]);

console.log(state);
  const pages = pagination(totalCount, perPage).map((el, index) => (
    <span className={currentPage === el 
        ? style.pagination__active
        : style.pagination
    } onClick={() => setstate(el)} key={index}>{el}</span>
  ));

  return <div className={style.wrap}>{pages}</div>;
};

export default Pagination;
