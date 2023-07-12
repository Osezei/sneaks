import React, { useState } from "react";
import Image from "next/image";
import { img } from "@/data/images";
import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Hero = () => {
  //const dispatch = useDispatch();
  const [toggled, setToggled] = useState(1);
  return (
    <>
      <section className="flex justify-between w-[1015px] mx-auto">
        <div className="">
          <div>
            {img.map(({ id, image, title }) => {
              return (
                <article key={id}>
                  {toggled === id ? (
                    <Image
                      src={image}
                      alt={title}
                      width={445}
                      height={445}
                      className="rounded-[15px] w-[445px] h-[445px]"
                    />
                  ) : null}
                </article>
              );
            })}
          </div>
          <div className="flex mt-8">
            {img.map(({ image, id, title }) => {
              return (
                <Image
                  key={id}
                  src={image}
                  alt={title}
                  width={88}
                  height={88}
                  onClick={() => setToggled(id)}
                  className={`w-[88px] h-[88px] ${
                    toggled === id
                      ? "mr-[31px] rounded-[10px] cursor-pointer border-2 border-[#FF7E1B] ease-in-out"
                      : "mr-[31px] rounded-[10px] cursor-pointer ease-in-out"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* texts */}
        <div className="w-[445px] h-[426px] font-family my-auto">
          <div>
            <h4 className="text-[#FF7E1B] text-[13px] font-bold uppercase">
              Sneaker Company
            </h4>
            <h3 className="my-6 font-bold text-[44px] text-[#1D2026] leading-[44px]">
              Fall Limited Edition Sneakers
            </h3>
            <p className="text-[#69707D] text-[16px] leading-[26px]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>
          {/* link */}
          <div className="mt-6">
            <Link
              href="/collection"
              className="text-white ease-in-out duration-300 hover:text-[#FF7E1B] font-semibold text-lg bg-[#FF7E1B] hover:bg-white rounded-lg flex justify-center py-4"
            >
              Check out collections
              <span className="my-auto ml-2 text-normal">
                <BsArrowUpRightCircle />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
