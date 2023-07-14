import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";

const About = () => {
  const activePage = "about";
  return (
    <Layout activePage={activePage}>
      <section className="text-center text-2xl font-medium">
        <h3>
          This was created with love using nextjs and tailwindCSS
          <br /> by
          <br /> Osezei.
        </h3>
      </section>
    </Layout>
  );
};

export default About;
