import React from "react";
import { useSelector } from "react-redux";
import style from "./cart.module.scss";

import crusade from "./../../assets/cart.png"
import Button from "../../components/UI/Button";
import BuyBlock from "../../components/UI/input/BuyBlock";

const Cart = () => {
  const cards = useSelector((state) => state.cart.items);

  const cartItem = cards.map((el, index) => (
    <div className={style.wrapper} key={el.id + index}>
      <div className={style.item}>
        <img
          src={el.img}
          alt=""
          className={style.img}
        />
        <h3 className={style.name}>{el.name}</h3>
        {/* <span className={style.count}>{el.count}</span>
        <span className={style.count}>{el.available}</span>
        <b className={style.price}>{el.price}</b>
        <Button name={"x"} /> */}
        <BuyBlock {...el}/>
      </div>
    </div>
  ));
  console.log(cartItem, 'cart !');

  return (
    <div className={style.cart}>
      <h2 className={style.title}>Корзина</h2>
      {cartItem < 1 
      ? <div className={style.popup}>
          <h3 className={style.popup__title}>Корзина пустая...</h3>
          <img className={style.crusade} src={crusade} alt="" />
      </div>
      : cartItem
     }
     {cartItem < 1 
     ?   <div className={style.one__btn}>
          <Button name={"Вернуться назад"} />
        </div>

     :  <div className={style.row__btn}>
          <Button name={"Вернуться назад"} />
          <Button name={"Очистить корзину"} />
        </div>
    }
    </div>
  );
};

export default Cart;
