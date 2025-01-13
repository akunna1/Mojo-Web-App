// src/app/layout.tsx
import { ReactNode } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./style/globals.css";  // Import global styles

// Layout-specific metadata

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
