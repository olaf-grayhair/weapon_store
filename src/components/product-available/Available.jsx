import React from 'react';
import style from './available.module.scss'

const Available = () => {
    return (
        <div className={style.available}>
            <span>В наличии:</span>
            <input type="checkbox" />
        </div>
    );
}

export default Available;
