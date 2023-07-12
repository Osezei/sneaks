import React from "react";
import { useGlobalContext } from "@/context";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { CiFaceFrown } from "react-icons/ci";

import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  const {
    cart,
    removeItem,
    increaseCartAmount,
    decreaseCartAmount,
    totalAmount,
    clearCartItems,
  } = useGlobalContext();

  if (cart.length < 1) {
    return (
      <>
        <Navigation />
        <div className="flex justify-center">
          <p className="items-center flex text-3xl font-semibold">
            Your cart is empty!{" "}
            <span className="pl-2 text-[#FF7E1B]">
              <CiFaceFrown />
            </span>
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <section className="w-[890px] mx-auto">
        {cart.map((item) => {
          const { name, company, id, image, price, amount, max } = item;
          return (
            <article key={id} className="flex justify-between mb-6">
              <div>
                <div className="flex gap-x-4">
                  <Image
                    src={image}
                    width={100}
                    height={100}
                    alt={name}
                    className="w-[100px] h-[100px] overflow-hidden object-cover"
                  />
                  <p className="uppercase ">
                    <span className="pr-2 ">{company}</span>
                    {name}
                  </p>
                </div>

                <button
                  className="flex items-center text-[#FF7E1B] mt-2"
                  onClick={() => removeItem(id)}
                >
                  <span className="text-lg ">
                    <MdDeleteOutline />
                  </span>
                  REMOVE
                </button>
              </div>
              <div className="flex my-auto uppercase font-medium">
                <div className="pr-8">
                  <p className="text-center">item</p>
                  <p className="text-[#FF7E1B] font-semibold text-center flex items-center">
                    <button
                      className="mr-3"
                      onClick={() => decreaseCartAmount(id, amount, max)}
                    >
                      <AiFillMinusSquare />
                    </button>
                    {amount}
                    <button
                      className="ml-3"
                      onClick={() => increaseCartAmount(id, amount, max)}
                    >
                      <AiFillPlusSquare />
                    </button>
                  </p>
                </div>
                <div>
                  <p className="">price</p>
                  <p className="text-[#FF7E1B] font-semibold text-center">
                    <span className="mr-1">$</span>
                    {(price * amount).toFixed(0)}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <div>
        <button onClick={clearCartItems}>clear cart</button>
        <div>
          <p>${totalAmount.toFixed(0)}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
