import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./home.module.scss";

import Card from "../../components/card-weapon/Card";
import Navbar from '../../components/navbar/Navbar'
import Pagination from "../../components/pagination/Pagination";
import Sceleton from "../../components/sceleton/Sceleton";
import { fetchWeapons } from "../../redux/action-creators/weapons";

const Home = () => {
  const {filter, search, category, available} = useSelector((state) => state.filters)

  const {currentPage, perPage, totalCount, loading, items} = useSelector((state) => state.weapons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeapons(category, search, currentPage, perPage, available));
  }, [dispatch, category, search, currentPage, available]);///ПОЧЕМУ 2 РЕНДЕРА?

  const sorting = () => {
    const sortedWeapons = [...items]

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

  const weapons = sorting().map((el, index) => <Card key={el.id} {...el}/>);
  const skeleton = sorting().map((el, index) => <Sceleton key={index}/>);

  return (
    <div>
      <Navbar/>
      <div className={style.content}>
        <h1 className={style.title}>Weapons</h1>
        <div className={style.content__items}>
          {loading ? skeleton : weapons}
        </div>
      </div>
      <Pagination 
        currentPage={currentPage}
        totalCount={totalCount}
        perPage={perPage}/>
    </div>
  );
};

export default Home;
