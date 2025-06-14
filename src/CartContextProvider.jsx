// //create the context
// //provide the state to context
// //wrap context in root component
// //consume the context using useContext

import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

export default function CartContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  async function fetchListOfProducts() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();
    // console.log(result);
    if (result && result?.products) {
      setListOfProducts(result?.products);
      setLoading(false);
    }
  }
  function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentCartItem = cpyExistingCartItems.findIndex(
      (item) => item.id === getProductDetails.id
    );

    if (isFullyRemoveFromCart) {
      cpyExistingCartItems.splice(findIndexOfCurrentCartItem, 1);
    } else {
      cpyExistingCartItems[findIndexOfCurrentCartItem] = {
        ...cpyExistingCartItems[findIndexOfCurrentCartItem],
        quantity: cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1,
        totalPrice:
          (cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1) *
          cpyExistingCartItems[findIndexOfCurrentCartItem].price,
      };
    }
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    setCartItems(cpyExistingCartItems);
  }

  function handleAddToCart(getProductDetails) {
    // console.log(productDetails);
    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );
    // console.log(findIndexOfCurrentItem);
    if (findIndexOfCurrentItem === -1) {
      cpyExistingCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails?.price,
      });
    } else {
      // console.log('its coming here');
      cpyExistingCartItems[findIndexOfCurrentItem] = {
        ...cpyExistingCartItems[findIndexOfCurrentItem],
        quantity: cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
        totalPrice:
          (cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1) *
          cpyExistingCartItems[findIndexOfCurrentItem].price,
      };
    }
    // console.log(cpyExistingCartItems);
    setCartItems(cpyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    navigate("/cart");
  }

  useEffect(() => {
    fetchListOfProducts();
    setCartItems(JSON.parse(localStorage.getItem("cartItems") || []));
  }, []);

  // console.log(cartItems);
  // console.log(listOfProducts);

  return (
    <ShoppingCartContext
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext>
  );
}
