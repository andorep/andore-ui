"use client";

import React, { useState } from "react";
import { Typography } from "@material-tailwind-ui/typography";
import {
  ToggleButton,
  ToggleButtonGroup,
} from "@material-tailwind-ui/toggle-button";
import MailIcon from "@/app/_components/icons/MailIcon";
import ChatIcon from "@/app/_components/icons/ChatIcon";
import ImageIcon from "@/app/_components/icons/ImageIcon";

interface MainProps {
  mailApp: React.ReactNode;
  chatApp: React.ReactNode;
  photosApp: React.ReactNode;
}

const Main = (props: MainProps) => {
  const { mailApp, chatApp, photosApp } = props;
  const [selected, setSelected] = useState(0);
  return (
    <section className="flex flex-col justify-between mx-auto container">
      <section className="title flex flex-col justify-between mb-9">
        <span className={"flex items-center gap-1 mb-3"}>
          <Typography
            variant={"headline"}
            className={"text-slate-950 text-3xl sm:text-5xl"}
            size={"md"}
          >
            <span className={"text-blue-500"}>Tailwind </span>
            <span>Meets </span>
            <span className={"text-yellow-500"}>Material Design 3</span>
          </Typography>
        </span>
        <Typography
          variant={"title"}
          className={"text-slate-950 font-normal -mt-3 text-lg sm:text-2xl"}
          size={"md"}
        >
          A collection of beautifully crafted react components
        </Typography>
      </section>
      <section className="flex flex-col  justify-between mb-4">
        <div className="blob1"></div>
        <div className="blob2"></div>
        <ToggleButtonGroup density={-2}>
          <ToggleButton
            startIcon={<MailIcon className={"w-4 h-4"} />}
            selected={selected == 0}
            onClick={() => setSelected(0)}
          >
            Mail
          </ToggleButton>
          <ToggleButton
            startIcon={<ChatIcon className={"w-4 h-4"} />}
            selected={selected == 1}
            onClick={() => setSelected(1)}
          >
            Chat
          </ToggleButton>
          <ToggleButton
            startIcon={<ImageIcon className={"w-4 h-4"} />}
            selected={selected == 2}
            onClick={() => setSelected(2)}
          >
            Photos
          </ToggleButton>
        </ToggleButtonGroup>
      </section>
      <section className="flex flex-col justify-between">
        <section className="App h-[600px] flex flex-row  mx-auto container xl:px-0 lg:px-2">
          {selected == 0 && mailApp}
          {selected == 1 && chatApp}
          {selected == 2 && photosApp}
        </section>
      </section>
    </section>
  );
};

export default Main;
