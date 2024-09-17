"use client";

import React from "react";
import {
  NavigationDivider,
  NavigationHeadline,
  NavigationItem,
  NavigationList,
} from "@material-tailwind-ui/navigation";
import { IconButton } from "@material-tailwind-ui/icon-button";
import { Typography } from "@material-tailwind-ui/typography";
import { Fab } from "@material-tailwind-ui/fab";
import useWindowSize from "@/app/_hooks/useWindowSize";
import { Avatar, AvatarFallback } from "@material-tailwind-ui/avatar";
import MenuIcon from "@/app/@chat/_components/icons/MenuIcon";
import HomeIcon from "@/app/@chat/_components/icons/HomeIcon";
import AlternateEmailIcon from "@/app/@chat/_components/icons/AlternateEmailIcon";
import KeepIcon from "@/app/@chat/_components/icons/KeepIcon";
import ChatIcon from "@/app/_components/icons/ChatIcon";

const ChatNavigation = () => {
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
          Chat
        </Typography>
      </div>
      <div className={"flex pl-3 mt-2 mb-5"}>
        <Fab icon={<ChatIcon />}>New chat</Fab>
      </div>
      <NavigationList condensed>
        <NavigationItem active icon={<HomeIcon />} trailing={999}>
          Home
        </NavigationItem>
        <NavigationItem icon={<AlternateEmailIcon />} trailing={99}>
          Mentions
        </NavigationItem>
        <NavigationItem icon={<KeepIcon />} trailing={9}>
          Pinned
        </NavigationItem>
        <NavigationDivider />
        <NavigationHeadline>Messages</NavigationHeadline>
        <NavigationItem
          icon={
            <Avatar>
              <AvatarFallback className={"text-xs"}>IR</AvatarFallback>
            </Avatar>
          }
        >
          Ila Roth
        </NavigationItem>
        <NavigationItem
          icon={
            <Avatar>
              <AvatarFallback className={"text-xs"}>MS</AvatarFallback>
            </Avatar>
          }
        >
          Merle Shah
        </NavigationItem>
        <NavigationItem
          icon={
            <Avatar>
              <AvatarFallback className={"text-xs"}>JB</AvatarFallback>
            </Avatar>
          }
        >
          Johanna Benjamin
        </NavigationItem>
      </NavigationList>
    </div>
  );
};

export default ChatNavigation;
