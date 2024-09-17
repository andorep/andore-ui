import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/(root)/_components/Header/Header";
import DotBackground from "@/app/(root)/_components/DotBackground/DotBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "andore/ui",
  description: "andore/ui is a collection of components built with Tailwind CSS and Material Design 3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DotBackground />
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
