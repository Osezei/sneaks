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
      <section className="flex flex-col md:flex-row lg:justify-between md:w-[700px] lg:w-[1015px] mx-auto">
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
                      className="md:rounded-[15px] mx-auto md:mx-auto lg:w-[445px] lg:h-[445px] object-fit"
                    />
                  ) : null}
                </article>
              );
            })}
          </div>
          <div className="hidden lg:flex justify-between mt-8">
            {img.map(({ image, id, title }) => {
              return (
                <Image
                  key={id}
                  src={image}
                  alt={title}
                  width={88}
                  height={88}
                  onClick={() => setToggled(id)}
                  className={`w-[88px] h-[88px] rounded-[10px]  ${
                    toggled === id
                      ? " cursor-pointer border-2 border-[#FF7E1B] ease-in-out"
                      : " cursor-pointer ease-in-out"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* texts */}
        <div className="md:w-[445px] lg:h-[426px] mt-7 lg:mt-0 font-family my-auto px-6 lg:px-0">
          <div>
            <h4 className="text-[#FF7E1B] text-[13px] font-bold uppercase">
              Sneaker Company
            </h4>
            <h3 className="lg:my-6 font-bold lg:text-[44px] text-[28px] text-[#1D2026] leading-[44px]">
              Fall Limited Edition Sneakers
            </h3>
            <p className="text-[#69707D] text-[16px] leading-[26px] my-[15px] lg:my-0">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>
          {/* link */}
          <div className="lg:mt-6">
            <Link
              href="/collection"
              className="text-white ease-in-out duration-300 hover:text-[#FF7E1B] font-semibold text-base lg:text-lg bg-[#FF7E1B] hover:bg-white rounded-md lg:rounded-lg flex justify-center py-4"
            >
              Check out collections
              <span className="my-auto ml-2 text-sm lg:text-normal">
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
