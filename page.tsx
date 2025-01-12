// src/app/page.tsx
import Head from "next/head";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Hero2 from "./components/hero2";
import Footer from "./components/footer";

export const metadata = {
  title: "Helper Mojo",
  description: "Created by Akunna Onyekachi",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Hero2 />
      <Footer />
    </>
  );
}
