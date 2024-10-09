"use client";

import React from "react";
import { Search } from "@andore-ui/search";

const Preview = () => {
  return (
    <div className="flex flex-col gap-4 w-fit">
      <Search placeholder="Search" variant={"outlined"} />
      <Search placeholder="Search" variant={"filled"} />
      <Search placeholder="Search" variant={"outlined"} size={"sm"} />
      <Search placeholder="Search" variant={"filled"} size={"sm"} />
    </div>
  );
};

export default Preview;
