import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./weapon.module.scss";

import { fetchOnePage } from "../../redux/action-creators/weapon";
import Button from "../../components/UI/Button";
import SceletonPage from "../../components/sceleton-page/SceletonPage";
import { cartAction } from "../../redux/reducers/cartReducer";
import BuyBlock from "../../components/UI/input/BuyBlock";
import { decreaseOneAction } from "../../redux/reducers/onePageReducer";

const WeaponPage = () => {
  const [count, setCount] = useState(1);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, loading, isLoading} = useSelector((state) => state.onePage);

  const {img, name, available, price, text } = useSelector((state) => state.onePage.items) || [];
  
  const cart = useSelector((state) => state.cart.items)
  useEffect(() => {
    dispatch(fetchOnePage(id));
  }, [dispatch]);
  console.log(available);
  const cartItem = {
    id,
    img,
    name,
    available,
    price,
    count: count,
  }

  const addToCart = () => {
    if(count <= available) {
      setCount(count+1)
      dispatch(cartAction(cartItem))
      dispatch(decreaseOneAction(count))
      setCount(1)
    }
  }

  if (!items) {
    return <>Загрузка...</>;
  }
  const isItStr = Number.isInteger(available) 

  const increasePrice = () => {
    if(count < available) setCount(count+1)
  }

  const decreasePrice = () => {
    if(count > 1) setCount(count-1)
  }

  const page = 
    <div className={style.page}>
      <div className={style.header}>
        <img className={style.img} src={img} alt="" />
        <div className={style.textBlock}>
          <h2 className={style.titel}>{name}</h2>
          <div className={style.priceBlock}>
            <span className={style.price}>{price} грн</span>
            {isItStr && available !== 0
              ? <span className={style.price}>В наличии: {available} шт</span>

              : "Нет в наличии"
              }
          </div>
          <p className={style.text}>{text}</p>
          <div className={style.buyBlock}>
            <input
              className={style.inp}
              type="number"
              placeholder={isItStr ? count : 0}
            />

            <div className={style.arrup} onClick={increasePrice}
            ></div>

            <div className={style.arrdown} onClick={decreasePrice}
            ></div>
            {isItStr && available !== 0
              ? 
                <div className={style.available}>
                  <b>{price * count} Грн</b>
                  <Button name={"Купить"} bool={false} action={addToCart}/>
                </div>
              : 
                <div className={style.available}>
                  <b>Нет в наличии</b>
                  <Button name={"Продано"} bool={true} />
                </div>
            }
          </div>
          <BuyBlock id={id} 
            count={count} 
            price={price} 
            name={"Продано"}
            increase={increasePrice}
            decrease={decreasePrice}
          />
        </div>
      </div>
    </div>
  return (
    <>
      {isLoading ? <SceletonPage/> : page}
    </>
  );
};

export default WeaponPage;
