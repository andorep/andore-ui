"use client";

import React from "react";
import { Avatar, AvatarImage } from "@material-tailwind-ui/avatar";
import { Search } from "@material-tailwind-ui/search";
import { IconButton } from "@material-tailwind-ui/icon-button";
import useWindowSize from "@/app/_hooks/useWindowSize";
import { Typography } from "@material-tailwind-ui/typography";
import SettingsIcon from "@/app/@chat/_components/icons/SettingsIcon";
import MenuIcon from "@/app/@chat/_components/icons/MenuIcon";

const ChatHeader = () => {
  const windowSize = useWindowSize();
  const isWindowLg = windowSize.width < 1280;
  return (
      <div className={"header flex flex-row w-full min-h-14 h-14 items-center"}>
          {isWindowLg && (
              <div
                  className={"flex flex-1 md:flex-none items-center gap-2 h-14 pr-3"}
              >
                  <IconButton>
                      <MenuIcon className={"h-6"}/>
                  </IconButton>
                  <Typography variant={"title"} size={"sm"}>
                      Chat
                  </Typography>
              </div>
          )}
          <div className={"hidden md:block  flex-1"}>
              <Search
                  placeholder={"Search chat..."}
                  className={"h-10  max-w-[720px]"}
              />
          </div>
          <div className={"flex flex-row gap-2"}>
              <IconButton>
                  <SettingsIcon className={"h-6 w-6"}/>
              </IconButton>
              <Avatar>
                  <AvatarImage src={"./3d_avatar_13.png"} alt="Colm Tuite"/>
              </Avatar>
          </div>
      </div>
  );
};

export default ChatHeader;
