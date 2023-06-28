import React from "react";
import Image from "next/image";
import { ImMan } from "react-icons/im";
const MenSection = ({ name, image, price }) => {
  return (
    <article className="relative">
      <Image
        src={image}
        width={300}
        height={300}
        alt={name}
        className="w-[300px] h-[300px] overflow-hidden object-cover rounded-2xl"
      />
      <div className="flex justify-between">
        <p className="capitalize text-lg font-semibold text-[#ff7e1b]">
          {name}
        </p>
        <p className="font-bold">${price}</p>
      </div>
      <ImMan className="text-[#ff7e1b] text-3xl absolute top-3 right-0" />
    </article>
  );
};

export default MenSection;
