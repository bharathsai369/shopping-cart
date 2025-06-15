import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const imgLink =
    "https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce_20shopping_20cart.png?v=1689527835";
  return (
    <div
      style={{ backgroundImage: `url(${imgLink})` }}
      className="bg-cover bg-center  h-screen w-full flex items-center justify-center min-h-screen"
    >
      <div className="text-center space-y-4 p-40 bg-white/25 rounded-xl shadow-md">
        <h1 className="text-3xl text-black font-bold">Shopping List App</h1>
        <h3
          onClick={() => navigate("/products")}
          className="text-blue-950 font-bold text-2xl mt-10 cursor-pointer hover:underline"
        >
          Go To Products
        </h3>
        <h3
          onClick={() => navigate("/cart")}
          className="text-blue-950 font-bold text-2xl cursor-pointer hover:underline"
        >
          Go To Cart
        </h3>
      </div>
    </div>
  );
}
