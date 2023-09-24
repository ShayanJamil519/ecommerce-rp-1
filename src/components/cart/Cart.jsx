"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUserGetMyCart, useUserRemoveFromCart } from "../../hooks/cart-hook";
import { useRouter } from "next/navigation";

import { useStateContext } from "../../Context/StateContext";

const Cart = () => {
  const [useremail, setUseremail] = useState("");
  const [data, setData] = useState("");
  const router = useRouter();
  const { setFinalCart } = useStateContext();

  const { data: cartData } = useUserGetMyCart(useremail);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setUseremail(email);
  }, []);

  useEffect(() => {
    setData(cartData);
    console.log("data: ", data);
  }, [cartData]);

  const removeFromCartMutation = useUserRemoveFromCart();
  const handleRemoveFromCart = (id) => {
    console.log("handle: ", id);
    removeFromCartMutation.mutate(id);
  };

  const handleIncreament = (id) => {
    console.log("handleIncreament: ", id);
    const updatedCart = data?.cart.map((item) => {
      if (item._id === id && item.productId.InStock > item.quantity) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setData({ ...data, cart: updatedCart });
  };

  const handleDecreament = (id) => {
    console.log("handleDecreament: ", id);
    const updatedCart = data?.cart.map((item) => {
      if (item._id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setData({ ...data, cart: updatedCart });
  };

  const handleCheckout = () => {
    // console.log("dddd", data);
    // console.log("ppppppp", data.totalPrice);

    // localStorage.setItem("data", data);
    setFinalCart(data);
    router.push("/place-order");
    // console.log("uuuuuuuuuuuu", data?.cart[0]?.productId?.images[0]?.url);
  };
  return (
    <>
      {data ? (
        <>
          <div className="  w-[80%] my-16 mx-auto  border-[#4e4e4e] border-[1px]">
            {/* Table Header */}
            <div className="grid grid-cols-5 text-[#fff] text-xl py-4 px-3  border-[#4e4e4e] border-b-[1px] bg-[#000]">
              <div className="col-span-3">
                <p>Products</p>
              </div>

              <div>
                <p>Quantity</p>
              </div>

              <div>
                <p>Subtotal</p>
              </div>
            </div>

            {/* Table Body */}
            <div className="text-[#fff] bg-[#1e1e1e] px-3">
              {data?.cart?.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="grid grid-cols-5 items-center py-3  "
                  >
                    <div className="col-span-3 ">
                      <div className="flex justify-start items-center gap-6">
                        <Image
                          src="/assets/Home/slider__img1.jpg"
                          // src={item?.productId?.images[0]?.url}
                          alt="logo"
                          width={200}
                          height={250}
                          className="rounded-md"
                        />
                        <div>
                          <h1 className="mb-1">{item.productId.name}</h1>
                          <p className="text-[12px] mb-1">
                            Price: <span>RS. {item.productId.price}</span>
                          </p>
                          <button
                            className="text-[#ff0000]"
                            onClick={() => handleRemoveFromCart(item._id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-start items-center gap-5 text-xl text-[#fff]">
                        <div className="w-[30px] grid place-items-center rounded-md bg-[#fff] text-[#000] cursor-pointer">
                          <p
                            className=" text-2xl "
                            onClick={() => handleDecreament(item._id)}
                          >
                            -
                          </p>
                        </div>
                        <p className=" text-2xl ">{item.quantity}</p>
                        <div className="w-[30px] grid place-items-center rounded-md bg-[#fff] text-[#000] cursor-pointer">
                          <p
                            className="text-2xl font-semibold"
                            onClick={() => handleIncreament(item._id)}
                          >
                            +
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p>{item.quantity * item.productId.price}</p>
                    </div>
                  </div>

                  <hr className="h-[1px]  border-[#4e4e4e]" />
                </>
              ))}
              {/* Total Container */}
              <div className="w-[40%] mr-0 ml-auto mt-10 pb-10">
                <hr className=" border-[#4e4e4e] bg-[#4e4e4e] h-[5px] rounded-lg mb-7" />
                <div className="flex justify-between items-center mb-4">
                  <p>Total Amount:</p>
                  <p>{cartData?.totalPrice}</p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full  border-none text-lg py-2 rounded-md bg-[#000] hover:bg-[#8f8785] text-[#fff]"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>No Items In Cart</p>
      )}
    </>
  );
};

export default Cart;
