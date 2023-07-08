import React from "react";
import { useGlobalContext } from "@/context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { kicks } from "@/data";
import Image from "next/image";
import { useParams } from "react-router-dom";

const SingleItem = () => {
  const [theItem, setTheItem] = useState("airforce");
  const { id } = useParams();
  const { allShoes, addToCart, manageStockInc, manageStockDec, tempstock } =
    useGlobalContext();

  const single = allShoes.find((item) => item.id === +id);

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

  const { name, image } = singlePage;

  return (
    <article>
      <p>{name}</p>
      <Image src={image} width={500} height={500} alt={name} />
      <div>
        <Link
          href="/cart"
          onClick={() => addToCart(single.id, tempstock, single)}
        >
          add to cart
        </Link>
      </div>
    </article>
  );
};

export default SingleItem;
