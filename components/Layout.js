import React from "react";
import Navigation from "./Navigation";
import Head from "next/head";

const Layout = ({ children, activePage }) => {
  return (
    <section className="overflow-hidden">
      <Head>
        <title>{activePage} -- Sneakers</title>
      </Head>
      <Navigation activePage={activePage} />
      {children}
    </section>
  );
};

export default Layout;
