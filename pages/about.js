import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Me from "../images/mee.jpeg";

const About = () => {
  const activePage = "about";
  return (
    <Layout activePage={activePage}>
      <section className="flex justify-center items-center gap-x-6">
        <div className="">
          <Image width={500} height={500} className="" src={Me} alt="headboy" />
        </div>
        <div className="w-[420px]">
          <p>
            I am a Frontend Developer able to build a Web presence from the
            ground concept, layout and UI to re-useable code, a goal-oriented
            Frontend Developer with a strong commitment to collaboration and
            solutions-oriented problem-solving.
          </p>
          <br />

          <p>
            Skilled at writing well-designed, testable and efficient code using
            current best practices in development.
          </p>
          <br />

          <p>
            Fast learner, hard worker and team player ready to work in a
            fast-paced, an collaborative environment.
          </p>
          <br />
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1jZWij4Y1c6x6Bt90_ofC3zqSh_KLU_Ha/edit?usp=drivesdk&ouid=106483839693778346197&rtpof=true&sd=true"
            className="text-2xl uppercase font-bold underline-offset-8 hover:underline text-[#FF7E1B] text-center ease-in-out duration-300"
          >
            view resume
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
