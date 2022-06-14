import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { cartAction } from "../../redux/reducers/cartReducer";
import Button from "../UI/Button";

import style from "./card.module.scss";


const Card = ({id, img, name, price, text, titel, url, available}) => {

  // const history = useNavigate()
  // history.push(`/weapon/${items.name}`)
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
      {/* <div className={style.header}>
        {Number.isInteger(available)
          ? <span className={style.avail}>в наличии: <b>{available} шт</b></span>
          : <span className={style.avail}>Нет в наличии</span>
        }
        <Button name={'Купить'} action={addToCart} bool/>
      </div> */}
      {Number.isInteger(available)
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
