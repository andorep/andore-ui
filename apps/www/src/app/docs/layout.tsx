import React from "react";
import "@/app/globals.css";
import { Typography } from "@andore-ui/typography";

export default function RootLayout({
  children,
  navigation,
  onpage,
}: Readonly<{
  children: React.ReactNode;
  navigation: React.ReactNode;
  onpage: React.ReactNode;
}>) {
  return (
    <section className="justify-between p-4 mx-auto container grid grid-cols-6 gap-6">
      {navigation}
      <section className="flex flex-col col-span-6 lg:col-span-4">
        {children}
        <div className={"pb-20"} />
      </section>
      <section className="flex-col hidden lg:flex">
        <div className="sticky top-[90px]">
          <Typography variant="body" size={"md"} className="mb-4">
            On this page
          </Typography>
          {onpage}
        </div>
      </section>
    </section>
  );
}
