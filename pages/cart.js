import React from "react";
import { useGlobalContext } from "@/context";
import Navigation from "@/components/Navigation";

const Cart = () => {
  const { cart } = useGlobalContext();

  if (cart.length < 1) {
    return (
      <>
        <Navigation />
        <p>fill it</p>
      </>
    );
  }

  return (
    <section>
      {cart.map((item) => {
        const { name, company, id } = item;
        return (
          <article key={id}>
            <p>{name}</p>
            <p>{company}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Cart;
