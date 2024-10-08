"use client";

import React from "react";
import { Avatar, AvatarFallback } from "@andore-ui/avatar";
import { Button } from "@andore-ui/button";
import { BottomSheet } from "@andore-ui/bottom-sheet";

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


const CopyContentIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        {...props}
    >
      <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
    </svg>
);

const Preview = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <BottomSheet
        title={"Actions"}
        description={"Choose an action to perform"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div
          className={"flex flex-row items-center justify-center gap-4 w-full"}
        >
          <Button
            startIcon={<CopyContentIcon />}
            variant={"outlined"}
            onClick={() => setOpen(false)}
          >
            Copy
          </Button>
          <Button
            startIcon={<NearbyIcon />}
            variant={"outlined"}
            onClick={() => setOpen(false)}
          >
            Nerby
          </Button>
        </div>
        <div
          className={
            "flex flex-row items-center justify-center gap-4 w-full mt-4"
          }
        >
          <span className={"flex flex-col items-center gap-2"}>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            John
          </span>
          <span className={"flex flex-col items-center gap-2"}>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            Jane
          </span>
          <span className={"flex flex-col items-center gap-2"}>
            <Avatar>
              <AvatarFallback>LE</AvatarFallback>
            </Avatar>
            Lee
          </span>
          <span className={"flex flex-col items-center gap-2"}>
            <Avatar>
              <AvatarFallback>OP</AvatarFallback>
            </Avatar>
            Oscar
          </span>
        </div>
      </BottomSheet>
    </div>
  );
};

export default Preview;
