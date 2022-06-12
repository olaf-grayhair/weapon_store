import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/UI/Button";
import style from "./cart.module.scss";

const Cart = () => {
  const cards = useSelector((state) => state.cart.items);
  // {img, cards, available, price}
  console.log(cards);
  const cartItem = cards.map((el, index) => (
    <div className={style.wrapper} key={el.id + index}>
      <div className={style.item}>
        <img
          src={el.img}
          alt=""
          className={style.img}
        />
        <h3 className={style.name}>{el.name}</h3>
        <span className={style.count}>{el.available}</span>
        <b className={style.price}>{el.price}</b>
        <Button name={"x"} />
      </div>
    </div>
  ));

  return (
    <div className={style.cart}>
      <h2 className={style.title}>CART</h2>
      {cartItem}
      {/* <div className={style.wrapper}>
                <div className={style.item}>
                    <img src="https://donjon.ru/images/resized/169x169/images/1c/3b/3b7fccb9-0783-11e4-be4a-002590a35117_e8b535a0-7c99-11e5-a371-002590a35116.jpg" alt="" className={style.img}/>
                    <h3 className={style.name}>name</h3>
                    <span className={style.count}>2</span>
                    <b className={style.price}>1000usd</b>
                    <Button name={'x'}/>

                </div>
            </div> */}
      <div className={style.row}>
        <Button name={"BACK"} />
        <Button name={"CLEAR"} />
      </div>
    </div>
  );
};

export default Cart;
