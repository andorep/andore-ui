import React from "react";
import Header from "@/app/_components/Header/Header";
import { fetchPages } from "@/app/_data/pages.data";

const Navigation = async () => {
  const pages = await fetchPages();
  return <Header docPages={pages} />;
};

export default Navigation;
