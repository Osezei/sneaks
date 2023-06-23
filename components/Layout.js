import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children, activePage }) => {
  return (
    <section>
      <Navigation activePage={activePage} />
      <div>{children}</div>
    </section>
  );
};

export default Layout;
{
  /* <section className="overflow-hidden">
  <Head>
    <title>{activePage} - Oshoke Oyati</title>
  </Head>
  <Header />
  {children}
  <Navigation activePage={activePage} />
</section>; */
}
