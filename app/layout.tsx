import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "URL Shortener",
  description: "A webapp that shortens an input URL into an alias",
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
          <Header />
          <main>
              {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
