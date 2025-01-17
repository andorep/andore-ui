import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/_components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "andore/ui",
  description:
    "andore/ui is a collection of components built with Tailwind CSS and Material Design 3.",
  openGraph: {
    title: "andore/ui",
    description:
      "andore/ui is a collection of components built with Tailwind CSS and Material Design 3.",
    url: "https://andorep.github.io/andore-ui",
    siteName: "andore/ui",
    images: [
      {
        url: "https://andorep.github.io/andore-ui/og-image-small.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://andorep.github.io/andore-ui/og-image-large.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "andore/ui",
    description:
      "andore/ui is a collection of components built with Tailwind CSS and Material Design 3.",
    creator: "@andorep",
    images: ["https://andorep.github.io/andore-ui/og-image-large.png"],
  },
};

export default function RootLayout({
  children,
  footer,
}: Readonly<{
  children: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className={'flex-1'}>{children}</main>
        {footer}
      </body>
    </html>
  );
}
