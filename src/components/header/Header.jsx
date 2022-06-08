import React from 'react';
import style from "./header.module.scss";
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import Search from "./../search/Search"

const Header = () => {
    return (
        <div className={style.header}>
            <Link to="/">
                <div className={style.logo}>
                </div>
            </Link>
            <Search/>
            <Link to="/cart">
                <div className={style.cart}>
                    <span className={style.price}>1000</span>
                    <span className={style.items}>items</span>
                </div>
            </Link>

        </div>
    );
}

export default Header;
