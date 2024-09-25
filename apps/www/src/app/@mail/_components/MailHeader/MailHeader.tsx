"use client";
import { Avatar, AvatarImage } from "@andore-ui/avatar";
import { Search } from "@andore-ui/search";
import React from "react";
import SettingsIcon from "@/app/@mail/_components/icons/SettingsIcon";
import { IconButton } from "@andore-ui/icon-button";
import useWindowSize from "@/app/_hooks/useWindowSize";
import MenuIcon from "@/app/@mail/_components/icons/MenuIcon";
import { Typography } from "@andore-ui/typography";

const MailHeader = () => {
  const windowSize = useWindowSize();
  const isWindowLg = windowSize.width < 1280;
  return (
    <div className={"header flex flex-row w-full min-h-14 h-14 items-center"}>
      {isWindowLg && (
        <div className={"flex flex-1 md:flex-none items-center gap-2 h-14 pr-3"}>
          <IconButton>
            <MenuIcon className={"h-6"} />
          </IconButton>
          <Typography variant={"title"} size={"sm"}>
            Mail
          </Typography>
        </div>
      )}
      <div className={"hidden md:block  flex-1"}>
        <Search
          placeholder={"Search mail..."}
          className={"h-10  max-w-[720px]"}
        />
      </div>
      <div className={"flex flex-row gap-2"}>
        <IconButton>
            <SettingsIcon className={"h-6 w-6"}/>
        </IconButton>
        <Avatar>
          <AvatarImage src={"./3d_avatar_13.png"} alt="Colm Tuite" />
        </Avatar>
      </div>
    </div>
  );
};

export default MailHeader;
