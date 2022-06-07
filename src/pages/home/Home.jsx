import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card-weapon/Card";
import Header from "../../components/header/Header";
import { fetchWeapons } from "../../redux/action-creators/weapons";

import style from "./home.module.scss";

const Home = () => {
  const weapons = useSelector((state) => state.weapons.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeapons());
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <div className={style.content}>
        <h1 className={style.title}>Weapons</h1>
        <div className={style.content__items}>
          {weapons.map((el, index) => (
            <Card key={index} {...el}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
