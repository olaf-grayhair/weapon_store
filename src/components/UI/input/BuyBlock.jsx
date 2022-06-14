import { React } from "react";
import { useDispatch } from "react-redux/es/exports";

import style from "./buyblock.module.scss";
import Button from "../Button";
import { deletetAction} from "../../../redux/reducers/cartReducer";

const BuyBlock = ({
  id,
  count,
  price,
  increasePrice,
  decreasePrice,
}) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deletetAction(id));
  };

  return (
    <div className={style.buyBlock}>
      <input className={style.inp} type="number" placeholder={count} />

      <div className={style.arrup} onClick={() => increasePrice(id)}></div>

      <div className={style.arrdown} onClick={() => decreasePrice(id)}></div>
      <b>{count * price} Грн</b>

      <Button name={"x"} action={deleteItem} />
    </div>
  );
};

export default BuyBlock;
