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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {/* Main content of each page will be inserted here */}
        <main>
          {children} {/* Page-specific content will go here */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
