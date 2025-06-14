import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Shopping List App</h1>
        <h3
          onClick={() => navigate("/products")}
          className="text-blue-500 mt-10 cursor-pointer hover:underline"
        >
          Go To Products
        </h3>
        <h3
          onClick={() => navigate("/cart")}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Go To Cart
        </h3>
      </div>
    </div>
  );
}
