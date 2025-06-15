import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CartList from "./pages/CartList";
import Home from "./pages/Home";

function App() {
  console.log("is there some problem up here?");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </>
  );
}

export default App;
