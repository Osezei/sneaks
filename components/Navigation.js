import React from "react";
import { links } from "@/data/utils";
import Link from "next/link";
import Image from "next/image";
import Cart from "@/images/icon-cart.svg";
import Avatar from "@/images/image-avatar.png";
import Logo from "@/images/logo.svg";

const Navigation = ({ activePage }) => {
  return (
    <section className="mt-7">
      <nav className="flex justify-between font-family items-center w-[1110px] h-[50px] mx-auto">
        <ul className="flex capitalize items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={137.5}
              height={20}
              className="mr-14"
            />
          </Link>

          {links.map(({ id, title, url }) => {
            return (
              <Link
                key={id}
                href={url}
                // className="mr-8 font-normal text-[15px] text-[#69707D]"
                className={`mr-8 font-normal text-[15px] ease-in-out duration-300 hover:text-black ${
                  activePage === title ? "text-black" : "text-[#69707D]"
                }`}
              >
                {title}
              </Link>
            );
          })}
        </ul>
        <div className="flex items-center">
          <Image
            src={Cart}
            alt="cart"
            height={21.82}
            width={20}
            className="mr-[46px]"
          />
          <Image src={Avatar} alt="avatar" height={50} width={50} />
        </div>
      </nav>
      <div className="bg-[#E4E9F2] h-[1px] w-[1110px] mx-auto mt-[34px]"></div>
    </section>
  );
};

export default Navigation;
