import { React } from "react";
import { useDispatch } from "react-redux/es/exports";

import style from "./buyblock.module.scss";
import Button from "../Button";
import { deletetAction} from "../../../redux/reducers/cartReducer";

const BuyBlock = ({
  id,
  count,
  price,
  available,
  name,
  increase,
  decrease,
  styles,
}) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deletetAction(id, count, (count * price)));
  };

  const increaseThePrice = () => {
    if(count < available) {
      increase(id)
    }
  }

  const decreaseThePrice = () => {
    decrease(id)
  }

  
  return (
    <div className={style.buyBlock}>
      <input className={style.inp} type="number" placeholder={count} />

      <div className={style.arrup} onClick={increaseThePrice}></div>

      <div className={style.arrdown} onClick={decreaseThePrice}></div>
      <span className={style.available}>{`В Наличии: ${available} Шт`}</span>
      <b>{count * price} Грн</b>

      <Button name={name} action={deleteItem} />
    </div>
  );
};

export default BuyBlock;
