import { useDispatch } from "react-redux";
import { shortenText } from "../helper/helper";
import {MdDeleteOutline} from "react-icons/md";
import styles from "./BasketCard.module.css";
import { decreaseData, increaseData, removeItem } from "../features/cart/cartSlice";


function BasketCard({data}) {
    const {image, title, quantity, price} = data;
    const dispatch = useDispatch()
  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <p> {shortenText(title)} - {price}$ </p>

        <div className={styles.actions}>
            {quantity == 1 && <button onClick={() => dispatch(removeItem(data))}> <MdDeleteOutline/> </button>}
            {quantity > 1 && <button onClick={() => dispatch(decreaseData(data))}>-</button>}
            <span> {quantity} </span>
            <button onClick={() => dispatch(increaseData(data))}>+</button>
        </div>
    </div>
  )
}

export default BasketCard