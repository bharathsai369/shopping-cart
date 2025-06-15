import React, { useContext } from "react";
import { ShoppingCartContext } from "../CartContextProvider";
import { useNavigate } from "react-router-dom";
import CartTile from "../components/CartTile";

export default function CartList() {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  // console.log(cartItems);
  return (
    <div className="max-w-5xl bg-white  mx-auto max-md:max-w-xl py-4">
      <h1 className="text-3xl text-black text-center mb-4 font-bold">
        Shopping List App
      </h1>
      <h2 className="text-2xl  font-bold text-black  text-center">Cart Page</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2 space-y-4">
          {cartItems?.length ? (
            cartItems.map((singleCartItem, i) => (
              <CartTile key={i} singleCartItem={singleCartItem} />
            ))
          ) : (
            <h1>No items available in cart!Please add some items</h1>
          )}
        </div>
        <div className="bg-gray-100 rounded-sm p-4 h-max">
          <h3 className="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2">
            Order Summary
          </h3>
          <ul className="text-gray-700 mt-4 space-y-2">
            <p className="flex flex-wrap gap-4 text-sm font-bold">
              Total{" "}
              <span>
                ${" "}
                {cartItems
                  .reduce((acc, curr) => acc + curr.totalPrice, 0)
                  .toFixed(2)}
              </span>
            </p>
          </ul>
          <div className="mt-5 flex gap-2">
            <button
              disabled={cartItems.length === 0}
              className="disabled:opacity-60 text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              Checkout
            </button>
            <button
              onClick={() => navigate("/products")}
              className="text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      <h3
        onClick={() => navigate("/")}
        className="text-center mt-4 text-blue-500 cursor-pointer hover:underline"
      >
        Go To Home
      </h3>
    </div>
  );
}
