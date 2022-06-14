import React from 'react';
import style from './button.module.scss'

const Button = ({name, action, bool}) => {
    const handelClick = () => {
        if(action !== undefined) action()
    }

    return (
        <button className={bool ? style.item__block : style.item} disabled={bool} onClick={handelClick}>{name}</button>
    );
}

export default Button;
