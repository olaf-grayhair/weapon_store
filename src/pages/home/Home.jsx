import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card-weapon/Card";
import Header from "../../components/header/Header";
import Pagination from "../../components/pagination/Pagination";
import Sceleton from "../../components/sceleton/Sceleton";
import { fetchWeapons } from "../../redux/action-creators/weapons";

import style from "./home.module.scss";

import { curentPageAction } from "../../redux/reducers/weaponsReducer";
const Home = () => {
  const weapons = useSelector((state) => state.weapons.items);
  const loading = useSelector((state) => state.weapons.loading);
  //ОБЬЕДЕНИТЬ useSElector ?
  const filter = useSelector((state) => state.filters.sortByPrice)
  const search = useSelector((state) => state.filters.search)
  const category = useSelector((state) => state.filters.category)
  ///ОБЬЕДЕНИТЬ useSElector ?
  const totalCount = useSelector((state) => state.weapons.totalCount);
  const perPage = useSelector((state) => state.weapons.perPage);
  const currentPage = useSelector((state) => state.weapons.currentPage);
 ///ОБЬЕДЕНИТЬ useSElector ?
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeapons(category, search, currentPage, perPage));
  }, [dispatch, category, search, currentPage]);///ПОЧЕМУ 2 РЕНДЕРА?

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

  const items = sorting().map((el, index) => <Card key={el.id} {...el}/>);
  const skeleton = sorting().map((el, index) => <Sceleton key={index}/>);

  return (
    <div>
      {/* <Header /> */}
      <div className={style.content}>
        <h1 className={style.title}>Weapons</h1>
        <div className={style.content__items}>
          {loading ? skeleton : items}
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
