import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import ProductsPage from "./pages/ProductsPage"
import DetailsPage from "./pages/DetailsPage"
import CheckOut from "./pages/CheckOut"
import NotFound from "./pages/NotFound"


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index path="/" element={<Navigate to="/products" replace/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/products/:id" element={<DetailsPage/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
