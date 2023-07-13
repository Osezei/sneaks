import React, { useState } from "react";
import { links } from "@/data/utils";
import Link from "next/link";
import Image from "next/image";
import Cart from "@/images/icon-cart.svg";
import Avatar from "@/images/image-avatar.png";
import Logo from "@/images/logo.svg";
import Navbar from "../images/icon-menu.svg";
import CloseButton from "../images/icon-close.svg";
import { useGlobalContext } from "@/context";
import "animate.css";

const Navigation = ({ activePage }) => {
  const { cart } = useGlobalContext();
  const noOfItems = cart.length;
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <section className="lg:mb-[90px]">
      <nav className="hidden mt-7 lg:flex justify-between font-family items-center lg:w-[1110px]  h-[50px] mx-auto">
        <ul className="flex capitalize items-center relative">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={137.5}
              height={20}
              className="mr-14 w-[137.5px] h-[20px]"
              priority
            />
          </Link>

          {links.map(({ id, title, url }) => {
            return (
              <Link
                key={id}
                href={url}
                // className="mr-8 font-normal text-[15px] text-[#69707D]"
                className={`mr-8 font-normal text-[15px] nav-links font-family ${
                  activePage === title ? "text-[#ff7e1b] " : "null"
                }`}
              >
                {title}
              </Link>
            );
          })}
        </ul>
        <div className="flex items-center">
          <div className="">
            <Link href="/cart">
              <Image
                src={Cart}
                alt="cart"
                height={21.82}
                width={20}
                className="mr-[46px] w-[20px] h-[21.82px] overflow-hidden relative"
                priority
              />
            </Link>
            <p className="bg-[#ff7e1b] text-white absolute top-[26px] right-[250px] rounded-full px-2">
              {noOfItems}
            </p>
          </div>
          <Image
            src={Avatar}
            alt="avatar"
            height={50}
            width={50}
            className="w-[50px] h-[50px]"
            priority
          />
        </div>
      </nav>
      <div className="bg-[#E4E9F2] h-[1px] w-[1110px] mx-auto mt-[34px] hidden lg:block"></div>
      {/* mobile screen and tablet screen */}
      <nav className="mt-4 mb-[28px] lg:hidden flex justify-between items-center w-[90%] mx-auto">
        <div className="flex items-center">
          <div className="">
            <Image
              src={Navbar}
              width={16}
              height={15}
              alt="navbar"
              className="mr-3 mt-1 relative"
              onClick={handleToggle}
            />
            <div className={toggle ? "block " : "hidden"}>
              <div className="absolute w-[250px] h-screen top-0 left-0 bg-white pl-6 pt-8">
                <Image
                  src={CloseButton}
                  alt="closeButton w-[13.44px] h-[13.44px]"
                  width={13.44}
                  height={13.44}
                  onClick={handleToggle}
                />
                <ul className="mt-10 capitalize">
                  {links.map(({ id, title, url }) => {
                    return (
                      <Link
                        key={id}
                        href={url}
                        className={`animate__animated animate__slideInLeft font-family block font-bold text-[18px] mt-4 ${
                          activePage === title
                            ? "text-[#ff7e1b] "
                            : "text-[#1D2026]"
                        }`}
                      >
                        {title}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <Link href="/" className="">
            <Image
              src={Logo}
              alt="logo"
              width={137.5}
              height={20}
              className="w-[137.5px] h-[20px]"
              priority
            />
          </Link>
        </div>
        <div className="flex items-center gap-x-3">
          <div>
            <Link href="/cart">
              <Image
                src={Cart}
                alt="cart"
                height={21.82}
                width={20}
                className="w-[20px] h-[21.82px]"
                priority
              />
            </Link>
            <p className="bg-[#ff7e1b] text-white absolute top-[3px] right-[41px] md:right-[62px] rounded-full px-2">
              {noOfItems}
            </p>
          </div>
          <Image
            src={Avatar}
            alt="avatar"
            height={24}
            width={24}
            className="w-[24px] h-[24px]"
            priority
          />
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
