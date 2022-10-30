import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from './cartItem.module.scss'

const CartItem = () => {
    const date = useSelector(state => state.cart)

    // const countItems = date.items.map(el => el.price * el.count)
    // const res = countItems.length > 0 ? countItems.reduce((a, b) => a + b) : []
    // console.log(countItems, 'map');
    // console.log(res, date.priceCount, 'reduce');
    ///NO NEED

  return (
    <Link to="/cart">
      <div className={style.cart}>
        <span className={style.price}>{!date.priceCount ? 'Пусто' : date.priceCount}</span>
        <span className={style.count}>
            {date.itemsCount != null ? date.itemsCount : 'no'}
            </span>
      </div>
    </Link>
  );
};

export default CartItem;
