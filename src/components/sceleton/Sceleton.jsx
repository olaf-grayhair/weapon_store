import React from 'react';
import style from "./sceleton.module.scss"

const Sceleton = () => {
    return (
        <div className={style.sceleton}>
            <div className={style.img}></div>
            <div className={style.textBlock}>
                <div className={style.titel}></div>
                <div className={style.price}></div>
                <div className={style.btnBlock}>
                    <div className={style.btn}></div>
                    <div className={style.btn}></div>
                </div>
            </div>
        </div>
    );
}

export default Sceleton;
