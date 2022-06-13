import { React, useState } from "react";
import { useDispatch } from "react-redux/es/exports";

import style from "./buyblock.module.scss";
import Button from "../Button";
import { clearCartAction, decreaseAction, deletetAction, increaseAction } from "../../../redux/reducers/cartReducer";

const BuyBlock = ({id, available, count, price}) => {
  const dispatch = useDispatch()

  const increasePrice = (id) => {
    dispatch(increaseAction(id))
  };

  const decreasePrice = (id) => {
    dispatch(decreaseAction(id))
  };

  const clearCart = (id) => {
    dispatch(clearCartAction(id))
  }

  const deleteItem = () => {
    dispatch(deletetAction(id))
  }

  return (
    <div className={style.buyBlock}>
      <input
        className={style.inp}
        type="number"
        placeholder={count}
      />

      <div className={style.arrup} onClick={() => increasePrice(id)}></div>

      <div className={style.arrdown} onClick={() => decreasePrice(id)}></div>
      <b>{count * price} Грн</b>

      <Button name={"x"} action={deleteItem}/>
    </div>
  );
};

export default BuyBlock;
