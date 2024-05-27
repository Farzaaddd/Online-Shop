import { Link } from "react-router-dom";
import img from "../../assets/notFound.png";
import styles from "./NotFound.module.css"

function NotFound() {
  return (
    <div className={styles.container}>
      <h3> You're in a wrong place! </h3>
      <img src={img} alt="not found" />
      <div className={styles.customButton}>
        <button> 
          <Link to="/products"> Back to the store 🛒 </Link>  
        </button>
      </div>
    </div>
  )
}

export default NotFound