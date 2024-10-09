"use client";

import React from "react";
import { Tooltip } from "@andore-ui/tooltip";

const Preview = () => {
  return (
    <p>
      You know, we have{" "}
      <Tooltip title="Naa, for real?">
        <span className={"underline cursor-pointer"}>tooltips</span>
      </Tooltip>{" "}
      ;)
    </p>
  );
};

export default Preview;
