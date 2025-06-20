import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../CartContextProvider";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    productDetails,
    setProductDetails,
    loading,
    setLoading,
    handleAddToCart,
    cartItems,
  } = useContext(ShoppingCartContext);
  async function fetchProductDetails() {
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiResponse.json();
    // console.log(result);
    if (result) {
      setProductDetails(result);
      setLoading(false);
    }
  }
  // console.log(id);
  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // console.log(productDetails);

  if (loading) return <h1>product details loading. please wait</h1>;

  return (
    <div>
      <div className="p-6 lg:max-w-7xl bg-white max-w-4xl mx-auto">
        <h1 className="text-3xl text-black text-center mb-4 font-bold">
          Shopping List App
        </h1>
        <h2 className="text-2xl  font-bold text-black  text-center">
          Product Details Page
        </h2>

        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-lg relative">
              <img
                className="w-4/5 rounded object-cover"
                src={productDetails?.thumbnail}
                alt={productDetails?.title}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {productDetails?.images?.length
                ? productDetails?.images.map((imageItem) => (
                    <div className="rounded-xl p-4 shadow-md" key={imageItem}>
                      <img
                        src={imageItem}
                        className="w-24 cursor-pointer"
                        alt="Product secondary image"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333333]">
              {productDetails?.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-bold text-[#333]">${productDetails?.price}</p>
            </div>
            <div className="flex flex-col">
              <button
                disabled={
                  productDetails
                    ? cartItems.findIndex(
                        (item) => item.id === productDetails.id
                      ) > -1
                    : false
                }
                onClick={() => handleAddToCart(productDetails)}
                className="disabled:opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate("/products")}
                className=" mt-5 ml-2 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded cursor-pointer hover:underline"
              >
                Go To Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
