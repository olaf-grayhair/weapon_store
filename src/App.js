import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/header/Header";
import Navbar from "./components/header/Navbar";

import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import WeaponPage from "./pages/weapon-page/weapon-page";
import style from './styles/main.module.scss'

function App() {
  return (
    <BrowserRouter>
    <div>
      <div className={style.App}>
        <Header/>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
            <Route exact path="/weapon/:id" element={<WeaponPage/>} />
          </Routes>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
