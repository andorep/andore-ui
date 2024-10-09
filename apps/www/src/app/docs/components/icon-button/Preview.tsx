"use client";

import React from "react";
import { IconButton } from "@andore-ui/icon-button";

const FilledHeart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
         fill="currentColor">
        <path
            d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/>
    </svg>
);

const Preview = () => {
  return (
    <div className="flex flex-row w-fit gap-4">
        <IconButton variant="filled" color="primary">
            <FilledHeart />
        </IconButton>
        <IconButton variant="outlined" color="primary">
            <FilledHeart />
        </IconButton>
        <IconButton variant="standard" color="primary">
            <FilledHeart />
        </IconButton>
    </div>
  );
};

export default Preview;
