"use client"
import Image from "next/image";
import Shampoo from "@/public/assets/Home/shampoo__img1.jpg";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import GenderSelector from "./GenderSelector";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUserAddToCart } from "../../hooks/cart-hook";

const ProductDetails = ({productId}) => {

  const [cartData, setCartData]  = useState({

    quantity:1,
    color:"",
    size:"",
    gender:""
    
  })


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCartData({
      ...cartData,
      [name]: value,
    });
  };

    const updateColor = (colorValue) => {
    setCartData({
      ...cartData,
      color: colorValue,
    });
  };

  const updateSize = (sizeValue) => {
    setCartData({
      ...cartData, size:sizeValue
    })
  }


  const {
    mutate: addMutate,
    isLoading,
    isError,
  } = useUserAddToCart(JSON.stringify({...cartData, productId}));


   const handleSubmit = async (event) => {
    event.preventDefault();

    addMutate(
      {},
      {
        onSuccess: (response) => {
          if (response?.data?.error) {
            toast.error(response?.data?.error);
          }
          if (response?.data?.message) {
            toast.success(response?.data?.message);
          }
        },
      }
    );
  };





  return (
      <div className="min-h-[80vh] my-16 w-[85%]  mx-auto grid grid-cols-3 gap-6">
        {/* Left */}

        <div className=" relative">
          <Image
            src={Shampoo}
            fill
            alt="logo/image"
            className="w-full rounded-md cover"
          />
        </div>

        {/* Right */}
        <div className="col-span-2   text-[#fff] ">
          <h1 className="text-3xl font-semibold uppercase mb-2 ">
            Sustainable Shampoo
          </h1>

         

          <p className=" my-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            repudiandae tempora debitis odit accusantium at quia magni vitae
            veniam, impedit obcaecati modi distinctio autem iusto corrupti
            officiis earum, expedita perspiciatis optio aliquid iste cupiditate
            omnis? Corrupti doloribus temporibus numquam at omnis asperiores!
            Explicabo eligendi vitae accusamus ut autem soluta quibusdam.
          </p>

        <ColorSelector selectedColor={cartData.color} updateColor={updateColor}  />
        <SizeSelector selectedSize={cartData.size} updateSize={updateSize} />
        <GenderSelector handleInputChange={handleInputChange} gender={cartData.gender} />

         
          <p className=" text-2xl font-semibold mb-3">
            PKR: <span className="ml-16 font-normal">1999 =/</span>
          </p>

          {/* Counter */}
          <div className="flex justify-start items-center gap-6">
            <p className="text-2xl font-semibold">Quantity:</p>
            <div className="flex justify-start items-center gap-5 text-xl text-[#fff]">
              <div className="w-[30px] grid place-items-center rounded-md bg-[#fff] text-[#000] cursor-pointer"  onClick={() => {
                if (cartData.quantity > 1) {
                  setCartData({ ...cartData, quantity: cartData.quantity - 1 });
                }
              }}>
                <p className=" text-2xl "  >-</p>
              </div>
              <p className=" text-2xl ">{cartData.quantity}</p>
              <div className="w-[30px] grid place-items-center rounded-md bg-[#fff] text-[#000] cursor-pointer" onClick={() => {
                setCartData({ ...cartData, quantity: cartData.quantity + 1 });
              }}>
                <p className="text-2xl font-semibold"  >+</p>
              </div>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-8 flex justify-start items-center gap-5">
            
            <button onClick={handleSubmit} className="bg-[#8f8785] hover:bg-[#75706e] w-60  uppercase  text-[#fff] py-2 px-5 rounded-md">
             {isLoading ? "Adding..." : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
  )
}

export default ProductDetails