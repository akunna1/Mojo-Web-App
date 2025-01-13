// src/app/page.tsx
import Head from "next/head";
import Hero from "./components/hero";
import Hero2 from "./components/hero2";
import Hero3 from "./components/hero3";

export const metadata = {
  title: "Helper Mojo",
  description: "Homepage",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero />
      <Hero2 />
      <Hero3 />
    </>
  );
}