import { BrowserRouter, Route, Routes } from "react-router-dom"
import Counter from "./components/Counter"
import ProductList from "./components/ProductList"
import Header from "./components/Header"
import Cart from "./components/Cart"

function App() {

  return (
    <BrowserRouter>

      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="products" element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
