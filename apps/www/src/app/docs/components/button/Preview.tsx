"use client";

import React from "react";
import { Button } from "@andore-ui/button";

const NearbyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="currentColor"
    {...props}
  >
    <path d="M480-304 304-480l176-176 176 176-176 176Zm56 199q-11 11-26 17t-30 6q-15 0-30-6t-26-17L105-424q-11-11-17-26t-6-30q0-15 6-30t17-26l318-318q12-12 26.5-18t30.5-6q16 0 30.5 6t26.5 18l318 318q11 11 17 26t6 30q0 15-6 30t-17 26L536-105Zm-56-87 288-288-288-288-288 288 288 288Z" />
  </svg>
);

const Preview = () => {
  return (
    <div className="flex flex-col gap-4 w-80">
      <Button startIcon={<NearbyIcon />} className="mb-4">
        Nearby
      </Button>
      <Button
        variant={"outlined"}
        startIcon={<NearbyIcon />}
        className="mb-4"
      >
          Nearby
      </Button>
      <Button variant={"filled"} startIcon={<NearbyIcon />} className="mb-4">
        Nearby
      </Button>
      <Button variant={"text"} startIcon={<NearbyIcon />} className="mb-4">
          Nearby
      </Button>
    </div>
  );
};

export default Preview;
