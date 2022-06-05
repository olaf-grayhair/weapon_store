import React from 'react';
import style from "./header.module.scss";
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className={style.header}>
            <div className="logo">
                <a href="#" className={style.logo}></a>
            </div>
            <Navbar/>
        </div>
    );
}

export default Header;
