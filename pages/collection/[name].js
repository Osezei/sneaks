import React from "react";
import { useGlobalContext } from "@/context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { kicks } from "@/data";
import Image from "next/image";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
//import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";

const SingleItem = () => {
  const { id } = useParams();

  const [theItem, setTheItem] = useState("airforce");

  const { allShoes, addToCart, manageStockInc, manageStockDec, tempstock } =
    useGlobalContext();

  //const single = allShoes.find((kick) => kick.id === id);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { name } = router.query;
    //console.log(router.query);
    setTheItem(name);
  }, [router.isReady, router.query]);

  const singlePage = allShoes.find(
    (kick) => kick.name.toLowerCase() === theItem.toLowerCase()
  );

  const { name, image, description, price, stock } = singlePage;

  return (
    <>
      <Navigation />

      <article className="flex justify-between w-[1015px] mx-auto mt-[90px] items-center">
        <div>
          <Image
            src={image}
            width={445}
            height={445}
            alt={name}
            priority
            className="rounded-2xl"
          />
        </div>

        <div className="w-[445px] ">
          <p className="uppercase text-[13px] text-[#FF7E1B] tracking-widest font-bold">
            sneaker company
          </p>
          <p className="text-[44px] mt-[27px] mb-8 capitalize font-bold">
            {name}
          </p>
          <p className="text-[#69707D] text-[16px] tracking-wide">
            {description}
          </p>
          <p className="text-[28px] font-bold mt-7 mb-[68px]">
            <span>$</span>
            {price}.00
          </p>
          <div className="flex gap-x-4">
            <div className="flex items-center justify-between w-[157px] h-[56px] bg-[#F6F8FD] rounded-2xl px-4">
              <button
                onClick={() => manageStockDec(tempstock, stock)}
                className="text-xl font-bold text-[#FF7E1B]"
              >
                -
              </button>
              <span className="font-bold text-[16px]">{tempstock}</span>
              <button
                onClick={() => manageStockInc(tempstock, stock)}
                className="text-xl font-bold text-[#FF7E1B]"
              >
                +
              </button>
            </div>
            <div>
              <Link
                href="/cart"
                onClick={() => addToCart(singlePage.id, tempstock, singlePage)}
                className="flex justify-center items-center text-white text-[16px] font-bold w-[272px] h-[56px] bg-[#FF7E1B] ease-in-out duration-300 border-2 hover:bg-white hover:text-[#FF7E1B] rounded-2xl"
              >
                <span className="mr-[15.54px]">
                  <BsCart3 />
                </span>
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default SingleItem;
