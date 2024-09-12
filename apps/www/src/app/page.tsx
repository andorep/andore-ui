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
    <section className="title flex flex-col justify-between p-4 mx-auto container">
      <section className="title flex flex-col justify-between mb-9">
        <span className={"flex items-center gap-1"}>
          <Typography
            variant={"headline"}
            className={"text-slate-950"}
            size={"md"}
          >
            <span className={"text-blue-500"}>Tailwind </span>
            <span>Meets </span>
            <span className={"text-yellow-500"}>Material Design 3</span>
          </Typography>
        </span>
        <Typography
          variant={"title"}
          className={"text-slate-950 font-normal -mt-3"}
          size={"md"}
        >
          The Perfect Blend of Style and Utility
        </Typography>
      </section>
      <section className="flex flex-col  justify-between">
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
