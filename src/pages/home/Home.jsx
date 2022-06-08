import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card-weapon/Card";
import Header from "../../components/header/Header";
import { fetchWeapons } from "../../redux/action-creators/weapons";

import style from "./home.module.scss";

const Home = () => {
  const weapons = useSelector((state) => state.weapons.items);
  const filter = useSelector((state) => state.filters.sortByPrice)
  const category = useSelector((state) => state.filters.category)///ОБЬЕДЕНИТЬ useSElector ?

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeapons(category));
  }, [category]);///need dispatch?

  console.log(filter, category);

  const sorting = () => {
    const sortedWeapons = [...weapons]

    if(filter === 'priceDown') {
      sortedWeapons.sort((a, b) => a.price - b.price)
    }
    if(filter === 'priceUp') {
      sortedWeapons.sort((a, b) => b.price - a.price)
    }
    if(filter === 'relavation') {
      return sortedWeapons
    }
    return sortedWeapons
  }

  return (
    <div>
      {/* <Header /> */}
      <div className={style.content}>
        <h1 className={style.title}>Weapons</h1>
        <div className={style.content__items}>
          {sorting().map((el, index) => (
            <Card key={index} {...el}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
