"use client";
import React, { useState } from "react";
import { Typography } from "@material-tailwind-ui/typography";
import {
  ToggleButton,
  ToggleButtonGroup,
} from "@material-tailwind-ui/toggle-button";

export default function Home() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="title flex flex-col items-center justify-between p-4 mx-auto container">
      <section className="title flex flex-col items-center justify-between mb-9">
        <span className={"flex items-center gap-1"}>
          <Typography
            variant={"display"}
            className={"text-slate-950"}
            size={"sm"}
          >
            <span className={"text-blue-500"}>Tailwind </span>
            <span>Meets </span>
            <span className={"text-yellow-500"}>Material Design </span>
          </Typography>
          <Typography
            variant={"display"}
            className={"text-yellow-500 font-black"}
            size={"md"}
          >
            3
          </Typography>
        </span>
        <Typography
          variant={"title"}
          className={"text-slate-950 font-normal -mt-3"}
          size={"lg"}
        >
          The Perfect Blend of Style and Utility
        </Typography>
      </section>
      <section className="flex flex-col items-center justify-between">
        <div className="blob1"></div>
        <div className="blob2"></div>
        <ToggleButtonGroup>
          <ToggleButton selected={selected == 0} onClick={() => setSelected(0)}>
            Mail
          </ToggleButton>
          <ToggleButton selected={selected == 1} onClick={() => setSelected(1)}>
            Chat
          </ToggleButton>
          <ToggleButton selected={selected == 2} onClick={() => setSelected(2)}>
            Mystery
          </ToggleButton>
        </ToggleButtonGroup>
      </section>
    </section>
  );
}
