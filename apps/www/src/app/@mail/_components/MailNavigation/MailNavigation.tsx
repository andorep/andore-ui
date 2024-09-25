"use client";

import React from "react";
import MenuIcon from "@/app/@mail/_components/icons/MenuIcon";
import {
  NavigationDivider,
  NavigationHeadline,
  NavigationItem,
  NavigationList,
} from "@andore-ui/navigation";
import InboxIcon from "@/app/@mail/_components/icons/InboxIcon";
import FavoriteIcon from "@/app/@mail/_components/icons/FavoriteIcon";
import TrashIcon from "@/app/@mail/_components/icons/TrashIcon";
import FolderIcon from "@/app/@mail/_components/icons/FolderIcon";
import { IconButton } from "@andore-ui/icon-button";
import { Typography } from "@andore-ui/typography";
import { Fab } from "@andore-ui/fab";
import EditIcon from "@/app/@mail/_components/icons/EditIcon";
import useWindowSize from "@/app/_hooks/useWindowSize";
import SendIcon from "@/app/_components/icons/SendIcon";

const MailNavigation = () => {
  const windowSize = useWindowSize();

  if(windowSize.width < 1280) {
    return null;
  }

  return (
    <div className={"Navigation flex flex-col"}>
      <div className={"flex items-center gap-2 h-14 min-w-64 pl-3"}>
        <IconButton>
          <MenuIcon className={"h-6"} />
        </IconButton>
        <Typography variant={"title"} size={"sm"}>
          Mail
        </Typography>
      </div>
      <div className={"flex pl-3 mt-2 mb-5"}>
        <Fab icon={<EditIcon />}>New message</Fab>
      </div>
      <NavigationList condensed>
        <NavigationItem active icon={<InboxIcon />} trailing={999}>
          Inbox
        </NavigationItem>
        <NavigationItem icon={<SendIcon />} trailing={99}>
          Outbox
        </NavigationItem>
        <NavigationItem icon={<FavoriteIcon />} trailing={9}>
          Favorites
        </NavigationItem>
        <NavigationItem icon={<TrashIcon />} trailing={1}>
          Trash
        </NavigationItem>
        <NavigationDivider />
        <NavigationHeadline>Personal Folders</NavigationHeadline>
        <NavigationItem icon={<FolderIcon />}>Friends</NavigationItem>
        <NavigationItem icon={<FolderIcon />}>Volunteering</NavigationItem>
        <NavigationItem icon={<FolderIcon />}>Work</NavigationItem>
      </NavigationList>
    </div>
  );
};

export default MailNavigation;
