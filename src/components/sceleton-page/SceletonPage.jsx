import React from "react";
import style from "./sceletonpage.module.scss";

const SceletonPage = () => {
  return (
    <div className={style.sceleton}>
      <div className={style.img}></div>
      <div className={style.block}>
        <div className={style.titel}></div>
        <div className={style.titel}></div>
        <div className={style.text}></div>
        <div className={style.btn__block}>
            <div className={style.btn}></div>
            <div className={style.btn}></div>
            <div className={style.btn}></div>
        </div>
      </div>
    </div>
  );
};

export default SceletonPage;
