import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {PiShoppingCartSimpleBold} from "react-icons/pi"

import styles from "./Layout.module.css"

function Layout({children}) {
    const state = useSelector(store => store.cart)
  return (
    <>
    <header className={styles.header}>
        <Link to="/products">Farzad Shop</Link>
        <Link to="/checkout">
            <div>
                <PiShoppingCartSimpleBold/>
                {!!state.itemsCounter && <span> {state.itemsCounter} </span>}
            </div>
        </Link> 
    </header>
    {children}
    <footer className={styles.footer}> Designed and developed by <a href="https://github.com/Farzaaddd/" target="_blank"> Farzaaddd ❤ </a></footer>
    </>
  )
}

export default Layout