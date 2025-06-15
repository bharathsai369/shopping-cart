import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CartList from "./pages/CartList";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <h1 style={{ color: "white" }}>hey</h1>
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
