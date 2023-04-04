import React, { useState } from "react";
import Image from "next/image";
import { img } from "@/data/images";

const Hero = () => {
  const [toggled, setToggled] = useState(1);
  return (
    <section>
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
                  className="rounded-[15px]"
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
              className="mr-[31px] rounded-[10px] cursor-pointer"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
