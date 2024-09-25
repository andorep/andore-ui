"use client";

import React from "react";
import {
  NavigationDivider,
  NavigationHeadline,
  NavigationItem,
  NavigationList,
} from "@andore-ui/navigation";
import { IconButton } from "@andore-ui/icon-button";
import { Typography } from "@andore-ui/typography";
import useWindowSize from "@/app/_hooks/useWindowSize";
import MenuIcon from "@/app/@photos/_components/icons/MenuIcon";
import ImageIcon from "@/app/_components/icons/ImageIcon";
import SearchIcon from "@/app/@photos/_components/icons/SearchIcon";
import GroupIcon from "@/app/@photos/_components/icons/GroupIcon";
import StarIcon from "@/app/@photos/_components/icons/StarIcon";
import LockIcon from "@/app/@photos/_components/icons/LockIcon";
import ArchiveIcon from "@/app/@photos/_components/icons/ArchiveIcon";

const PhotosNavigation = () => {
  const windowSize = useWindowSize();

  if (windowSize.width < 1280) {
    return null;
  }

  return (
    <div className={"Navigation flex flex-col"}>
      <div className={"flex items-center gap-2 h-14 min-w-64 pl-3"}>
        <IconButton>
          <MenuIcon className={"h-6"} />
        </IconButton>
        <Typography variant={"title"} size={"sm"}>
          Photos
        </Typography>
      </div>
      <NavigationList >
        <NavigationItem active icon={<ImageIcon />} trailing={999}>
          Photos
        </NavigationItem>
        <NavigationItem icon={<SearchIcon />} trailing={99}>
          Explore
        </NavigationItem>
        <NavigationItem icon={<GroupIcon />} trailing={9}>
          Share with me
        </NavigationItem>
        <NavigationDivider />
        <NavigationHeadline>Library</NavigationHeadline>
        <NavigationItem icon={<StarIcon/>}>
          Favorites
        </NavigationItem>
        <NavigationItem icon={<LockIcon/>}>
          Private Folder
        </NavigationItem>
        <NavigationItem icon={<ArchiveIcon/>}>
          Archive
        </NavigationItem>
      </NavigationList>
    </div>
  );
};

export default PhotosNavigation;
