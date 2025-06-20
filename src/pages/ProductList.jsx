import React, { useContext } from "react";
import { ShoppingCartContext } from "../CartContextProvider";
import ProductTile from "../components/ProductTile";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const { listOfProducts, loading } = useContext(ShoppingCartContext);
  // console.log(listOfProducts);
  const navigate = useNavigate();

  return (
    <>
      {/* <h2>ProductList</h2> */}
      <section className="py-12  bg-white sm:py-16 lg:py-20 text-black">
        <h1 className="text-3xl text-black text-center mb-4 font-bold">
          Shopping List App
        </h1>
        <div className="px-4 mx-auto sm:px-6 lg:px-9 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h3
              onClick={() => navigate("/")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Go To Home
            </h3>
            <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">
              Our featured products
            </h2>
          </div>
          {loading ? (
            <h2 className="text-center text-2xl font-bold my-4">Loading...</h2>
          ) : null}

          <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
            {listOfProducts && listOfProducts.length > 0 ? (
              listOfProducts.map((product, i) => (
                <ProductTile key={i} product={product} />
              ))
            ) : (
              <h2 className="text-center text-2xl font-bold my-4">
                no products found
              </h2>
            )}
          </div>
          <h3
            onClick={() => navigate("/")}
            className="text-blue-500 text-center mt-10 cursor-pointer hover:underline"
          >
            Go To Home
          </h3>
        </div>
      </section>
    </>
  );
}
