import Home from "./pages/home/Home";
import style from './styles/main.module.scss'

function App() {
  return (
    <div>
      <div className={style.App}>
        <Home/>
      </div>
    </div>
  );
}

export default App;
