import style from "./card.module.scss";
import { Link } from "react-router-dom";

import React from "react";

const Card = ({id, img, name, price, text, titel, url, available}) => {

  return (
    <Link to={`/weapon/${id}`}>
    <div className={style.item}>
      <img
        src={img}
        className={style.img}
        alt=""
      />
      <h3 className={style.titel}>{name}</h3>
      <b className={style.price}>{price} грн</b>
      <div className={style.header}>
        {Number.isInteger(available)
          ? <span className={style.avail}>в наличии: <b>{available} шт</b></span>
          : <span className={style.avail}>Нет в наличии</span>
        }
        <button className={style.btn}>Купить</button>
      </div>
    </div>
    </Link>
  );
};

export default Card;
