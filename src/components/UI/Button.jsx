import React from 'react';
import style from './button.module.scss'

const Button = ({name, action}) => {

    return (
        <button className={style.item} onClick={() => action()}>{name}</button>
    );
}

export default Button;
