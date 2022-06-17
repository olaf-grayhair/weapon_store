import React from 'react';
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import Search from "./../search/Search"
import CartItem from './cart/CartItem';

const Header = () => {
    return (
        <div className={style.header}>
            <Link to="/">
                <div className={style.logo}>
                </div>
            </Link>
            <Search/>
            <CartItem/>
        </div>
    );
}

export default Header;
