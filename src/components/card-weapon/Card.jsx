import style from "./card.module.scss";

import React from "react";

const Card = ({id, img, name, price, text, titel, url}) => {
  return (
    <div className={style.item}>
      <img
        src={img}
        className={style.img}
        alt=""
      />
      <h3 className={style.titel}>{name}</h3>
      <p className={style.text}>{text}</p>
      <div className={style.header}>
        <span className={style.price}>{price} usd</span>
        <button className={style.btn}>buy</button>
      </div>
    </div>
  );
};

export default Card;
