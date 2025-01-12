// src/app/resources/page.tsx
import Head from "next/head";
import Navbar from "../components/navbar";

export const metadata = {
  title: "Helper Mojo | Resources",
  description: "Created by Akunna Onyekachi",
};

export default function Resources() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        <h1 className="text-5xl">Resources Page</h1>
        <p>Here are some resources for Mojo...</p>
      </div>
    </>
  );
}
