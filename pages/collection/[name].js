import React from "react";
import { useGlobalContext } from "@/context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { kicks } from "@/data";
import Image from "next/image";

const SingleItem = () => {
  const [theItem, setTheItem] = useState("airforce");

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { name } = router.query;
    //console.log(router.query);
    setTheItem(name);
  }, [router.isReady, router.query]);

  const singlePage = kicks.find(
    (kick) => kick.name.toLowerCase() === theItem.toLowerCase()
  );

  const { id, name, image } = singlePage;

  return (
    <article>
      <p>{name}</p>
      <Image src={image} width={500} height={500} alt={name} />
    </article>
  );
};

export default SingleItem;
