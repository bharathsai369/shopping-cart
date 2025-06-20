import React, { useContext } from "react";
import { ShoppingCartContext } from "../CartContextProvider";

export default function CartTile({ singleCartItem }) {
  const { handleRemoveFromCart, handleAddToCart } =
    useContext(ShoppingCartContext);
  //   console.log(singleCartItem);
  return (
    <>
      <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              src={singleCartItem?.thumbnail}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-black">
              {singleCartItem?.title}
            </h3>
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, true)}
              className="text-sm px-4 py-3 mt-2 bg-transparent font-extrabold"
            >
              REMOVE
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h3 className="text-lg text-black font-bold ">
            ${singleCartItem?.totalPrice.toFixed(2)}
          </h3>
          <p className="mt-2 mb-3 text-black font-bolf text-[16px]">
            Quantity: {singleCartItem?.quantity}
          </p>
          <div className="mt-3">
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, false)}
              className="disabled:opacity-65 border border-[#000]"
              disabled={singleCartItem?.quantity === 1}
            >
              -
            </button>
            <button
              onClick={() => handleAddToCart(singleCartItem)}
              className="border ml-2 border-[#000]"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500" />
    </>
  );
}
