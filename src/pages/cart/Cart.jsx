import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import style from "./cart.module.scss";

import crusade from "./../../assets/cart.png";
import Button from "../../components/UI/Button";
import BuyBlock from "../../components/UI/input/BuyBlock";
import {
  clearCartAction,
  increaseAction,
  decreaseAction,
} from "../../redux/reducers/cartReducer";

const Cart = () => {
  const history = useNavigate()
  const returnPrev = () => {
    history(-1)
  }
  const cards = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const clearCart = (id) => {
    dispatch(clearCartAction(id));
  };

  const increasePrice = (id) => {
    dispatch(increaseAction(id));
  };

  const decreasePrice = (id) => {
    dispatch(decreaseAction(id));
  };

  const cartItem = cards.map((el, index) => (
    <div className={style.wrapper} key={el.id + index}>
      <div className={style.item}>
        <img src={el.img} alt="" className={style.img} />
        <h3 className={style.name}>{el.name}</h3>
        <BuyBlock
          {...el}
          name={'x'}
          increase={increasePrice}
          decrease={decreasePrice}
        />
      </div>
    </div>
  ));
  console.log(cards, "cart !");

  return (
    <div className={style.cart}>
      <h2 className={style.title}>Корзина</h2>
      {cartItem < 1 ? (
        <div className={style.popup}>
          <h3 className={style.popup__title}>Корзина пустая...</h3>
          <img className={style.crusade} src={crusade} alt="" />
          <div className={style.one__btn}>
            <Button name={"Вернуться назад"} action={returnPrev}/>
          </div>
        </div>
      ) : (
        <>
        {cartItem}
        <div className={style.row__btn}>
          <Link to="/">
            <Button name={"Вернуться назад"} action={returnPrev}/>
          </Link>
          <Button name={"Очистить корзину"} action={clearCart} />
        </div>
        </>
      )}
    </div>
  );
};

export default Cart;
