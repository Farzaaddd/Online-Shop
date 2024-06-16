import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { fetchData } from "../features/products/productSlice";
import {useSelector, useDispatch} from "react-redux"

import { filterProducts, getInitialQuery, searchProducts } from "../helper/helper";
import styles from "./ProductsPage.module.css"
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

function ProductsPage() {

  const {products, loading} = useSelector(state => state.product);
  const dispatch = useDispatch();

  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchData());
  }, [])

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products])

  useEffect(() => {
    setSearchParams(query)
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category)
    setDisplayed(finalProducts)
  }, [query])

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>

      <div className={styles.container}>
      <div className={styles.products}>
        {loading && <Loader/>}  {displayed.map(product => <Card key={product.id} data={product}/> )}
      </div>

      <SideBar query={query} setQuery={setQuery}/>
    </div>
    </>
  )
}

export default ProductsPage