import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from './cartItem.module.scss'

const CartItem = () => {
    const date = useSelector(state => state.cart)

  return (
    <Link to="/cart">
      <div className={style.cart}>
        <span className={style.price}>1000</span>
        <span className={style.count}>
            {date.itemsCount != null ? date.itemsCount : 'no'}
            </span>
      </div>
    </Link>
  );
};

export default CartItem;
