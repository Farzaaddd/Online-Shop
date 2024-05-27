import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCard } from "../context/CartContext"

import styles from "./CheckOut.module.css"
import Basket from "../../assets/box.png"
import { Link } from "react-router-dom";

function CheckOut() {
  const [state, dispatch] = useCard();

  const clickHandler = (type, payLoad) => dispatch({type, payLoad})

  if(!state.itemsCounter) {
    return (
      <div className={styles.empty}>
        <h3> Unfortunately your basket is empty! </h3>
        <img src={Basket} alt="basket" />
        <div className={styles.customButton}>
          <button> 
            <Link to="/products"> Back to the store 🛒 </Link>  
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler}/>
      <div className={styles.products}>
        {state.selectedItems.map((item) => 
          <BasketCard key={item.id} data={item} clickHandler={clickHandler}/>
        )}
      </div>
    </div>
  )
}

export default CheckOut