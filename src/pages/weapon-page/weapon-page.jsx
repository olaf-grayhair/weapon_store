import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./weapon.module.scss";
import { fetchOnePage } from "../../redux/action-creators/weapon";
import Button from "../../components/UI/Button";

const WeaponPage = () => {
  const [state, setState] = useState(1);
  // const [price, setPrice] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, loading, price} = useSelector((state) => state.onePage);
  const cartItems = useSelector((state) => state.cart.items)

  console.log(loading, price, items.available);
  useEffect(() => {
    dispatch(fetchOnePage(id));
    // if(loading) setPrice(items.price)
  }, [dispatch]);

  if (!items) {
    return <>Загрузка...</>;
  }

  //   const increasePrice = (item, itemId) => {
  //       if(id === itemId) {
  //         console.log(id, itemId);
  //         if(state < items.available) {
  //           setPrice(price + item)
  //           setState(state+1)
  //         }
  //       }
  // }

  //   const decreasePrice = (item) => {
  //       if(items.available >= state && state != 0) {
  //         setPrice(price - item)
  //         setState(state-1)
  //       }
  // }

  // console.log(state, items.available);
  // console.log(price, items.price);
  return (
    <div className={style.page}>
      <div className={style.header}>
        <img className={style.img} src={items.img} alt="" />
        <div className={style.textBlock}>
          <h2 className={style.titel}>{items.name}</h2>
          <div className={style.priceBlock}>
            <span className={style.price}>{items.price} грн</span>
            {Number.isInteger(items.available) ? (
              <span className={style.price}>
                В наличии: {items.available} шт
              </span>
            ) : (
              "Нет в наличии"
            )}
          </div>
          <p className={style.text}>{items.text}</p>
          <div className={style.buyBlock}>
            <input
              className={style.inp}
              type="number"
              value={items.available > 0 ? items.available : 0}
              onChange={() => setState(state + 1)}
            />

            <div
              className={style.arrup}
              //  onClick={() => increasePrice(items.price, items.id)}
            ></div>

            <div
              className={style.arrdown}
              // onClick={() => decreasePrice(items.price)}
            ></div>
            {typeof items.available !== "string" ? (
              <div className={style.available}>
                <b>{price} Грн</b>
                <Button name={"Купить"} bool={false} />
              </div>
            ) : (
              <div className={style.available}>
                <b>Нет в наличии</b>
                <Button name={"Продано"} bool={true} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponPage;
