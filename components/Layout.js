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
      <div className="lg:mb-10">{children}</div>
    </section>
  );
};

export default Layout;
