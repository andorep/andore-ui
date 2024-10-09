"use client";

import React from "react";
import { Chip } from "@andore-ui/chip";

const Preview = () => {
  return (
    <div className="flex flex-col gap-4 w-fit">
        <Chip variant={'elevated'} startIcon="🚀">
            Click me
        </Chip>
        <Chip selected variant={'elevated'} endIcon="🚀">
            Click me
        </Chip>
        <Chip variant={'outlined'} startIcon="🚀">
            Click me
        </Chip>
        <Chip selected variant={'outlined'} endIcon="🚀">
            Click me
        </Chip>
    </div>
  );
};

export default Preview;
