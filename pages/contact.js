import React from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  const activePage = "contact";
  return (
    <Layout activePage={activePage}>
      <section className="text-center mt-28 w-[90%] mx-auto">
        <h3 className=" uppercase text-xl text-text-color mb-2">
          Send me a message
        </h3>
        <a
          className=" text-5xl lg:text-6xl font-semibold underline underline-offset-4 mail text-[#FF7E1B] "
          href="mailto:john.osezei@yahoo.com"
          target="_blank"
          rel="noreferrer"
        >
          john.osezei@yahoo.com
        </a>
        {/* <h3 className=" uppercase text-xl text-text-color mt-14 mb-2">
          OR CONNECT WITH ME ON SOCIALS
        </h3> */}
      </section>
    </Layout>
  );
};

export default Contact;
