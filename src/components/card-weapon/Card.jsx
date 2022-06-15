import {React, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { cartAction } from "../../redux/reducers/cartReducer";
import { decreaseAvailableAction } from "../../redux/reducers/weaponsReducer";
import Button from "../UI/Button";

import style from "./card.module.scss";


const Card = ({id, img, name, price, text, titel, url, available}) => {

  // const history = useNavigate()
  // history.push(`/weapon/${items.name}`)
  const items = useSelector((state) => state.cart.items)
  const totalAvailable = items.map(el => el.available)
  const totalCount = items.map(el => el.count)
  const tCount = totalCount.join()

  const [state, setstate] = useState(available);

  const arr = items.map(el => el.count === el.available ? true : false)

  const dispatch = useDispatch()
  const cartItem = {
    id,
    img,
    name,
    // available: available - 1,
    available,
    price,
    count: 1,
  }
  const addToCart = () => {
    dispatch(cartAction(cartItem))
    dispatch(decreaseAvailableAction(id))
    console.log(available);

    // const arr = items.map(el => (
    //   el.count === el.available ? true : false
    // ))
  }
  // console.log(totalCount, totalAvailable, available, 'addToCart');
  const array = [...items]
  const a = array.map(el => el.count !== available ? {...el, count: + 1} : el)

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
