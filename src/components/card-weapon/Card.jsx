import {React, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../redux/reducers/cartReducer";
import { decreaseAvailableAction } from "../../redux/reducers/weaponsReducer";
import Button from "../UI/Button";

import style from "./card.module.scss";


const Card = ({id, img, name, price, available}) => {
<<<<<<< HEAD
  // const history = useNavigate()
  // history.push(`/weapon/${items.name}`)
=======
>>>>>>> add github.io

  const dispatch = useDispatch()
  const cartItem = {
    id,
    img,
    name,
    available,
    price,
    count: 1,
  }
  const addToCart = () => {
    dispatch(cartAction(cartItem))
    dispatch(decreaseAvailableAction(id))
    console.log(available, 'Card-available');
  }

  return (
    <div className={style.item}>
    <Link to={`/weapon/${id}`}>
      <img
        src={img}
        className={style.img}
        alt=""
      />
    </Link>
      <h3 className={style.titel}>{name}</h3>
      <b className={style.price}>{price} грн</b>
      {Number.isInteger(available) && available !== 0
      // {Number.isInteger(available)   
      ? <div className={style.header}>
          <span className={style.avail}>в наличии: <b>{available} шт</b></span>
          <Button name={'Купить'} action={addToCart} bool={false}/>
        </div>

      : <div className={style.header}>
          <span className={style.avail}>Нет в наличии</span>
          <Button name={'Продано'} action={addToCart} bool={true}/>
        </div>
      }
    </div>
  );
};

export default Card;
