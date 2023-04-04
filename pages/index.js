import Head from "next/head";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section>
      <Navigation />
      <Hero />
    </section>
  );
}
