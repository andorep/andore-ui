import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "andore/ui",
  description: "andore/ui is a collection of components built with Tailwind CSS and Material Design 3.",
  openGraph: {
    title:  "andore/ui",
    description: "andore/ui is a collection of components built with Tailwind CSS and Material Design 3.",
    url: "https://andreperegrina.github.io/andore-ui",
    siteName: "andore/ui",
    images: [
      {
        url: 'https://andreperegrina.github.io/andore-ui/og-image-small.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://andreperegrina.github.io/andore-ui/og-image-large.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
