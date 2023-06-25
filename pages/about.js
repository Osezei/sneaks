import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";

const About = () => {
  const activePage = "about";
  return (
    <Layout activePage={activePage}>
      <div>
        <h3>This was created with love using reactjs.</h3>
      </div>
    </Layout>
  );
};

export default About;
