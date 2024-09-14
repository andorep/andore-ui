"use client";
import { Avatar, AvatarImage } from "@material-tailwind-ui/avatar";
import { Search } from "@material-tailwind-ui/search";
import React from "react";
import SettingsIcon from "@/app/@photos/_components/icons/SettingsIcon";
import { IconButton } from "@material-tailwind-ui/icon-button";
import useWindowSize from "@/app/_hooks/useWindowSize";
import MenuIcon from "@/app/@photos/_components/icons/MenuIcon";
import { Typography } from "@material-tailwind-ui/typography";

const PhotosHeader = () => {
  const windowSize = useWindowSize();
  const isWindowLg = windowSize.width < 1280;
  return (
    <div className={"header flex flex-row w-full min-h-14 h-14 items-center"}>
      {isWindowLg && (
        <div className={"flex items-center gap-2 h-14 pr-3"}>
          <IconButton>
            <MenuIcon className={"h-6"} />
          </IconButton>
          <Typography variant={"title"} size={"sm"}>
            Photos
          </Typography>
        </div>
      )}
      <div className={"flex-1"}>
        <Search
          placeholder={"Search photos..."}
          className={"h-10  max-w-[720px]"}
        />
      </div>
      <div className={"flex flex-row gap-2"}>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <Avatar>
          <AvatarImage src={"/3d_avatar_13.png"} alt="Colm Tuite" />
        </Avatar>
      </div>
    </div>
  );
};

export default PhotosHeader;
