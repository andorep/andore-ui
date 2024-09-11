"use client";

import React from "react";
import MenuIcon from "@/app/@mail/_components/icons/MenuIcon";
import {
    NavigationDivider,
    NavigationHeadline,
    NavigationItem,
    NavigationList,
} from "@material-tailwind-ui/navigation";
import InboxIcon from "@/app/@mail/_components/icons/InboxIcon";
import SendIcon from "@/app/@mail/_components/icons/SendIcon";
import FavoriteIcon from "@/app/@mail/_components/icons/FavoriteIcon";
import TrashIcon from "@/app/@mail/_components/icons/TrashIcon";
import FolderIcon from "@/app/@mail/_components/icons/FolderIcon";
import { IconButton } from "@material-tailwind-ui/icon-button";
import { Typography } from "@material-tailwind-ui/typography";

const MailNavigation = () => {
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
            <NavigationList condensed>
                <NavigationItem
                    active
                    icon={<InboxIcon />}
                    trailing={999}
                >
                    Inbox
                </NavigationItem>
                <NavigationItem
                    icon={<SendIcon />}
                    trailing={99}
                >
                    Outbox
                </NavigationItem>
                <NavigationItem
                    icon={<FavoriteIcon />}
                    trailing={9}
                >
                    Favorites
                </NavigationItem>
                <NavigationItem
                    icon={<TrashIcon />}
                    trailing={1}
                >
                    Trash
                </NavigationItem>
                <NavigationDivider />
                <NavigationHeadline>Personal Folders</NavigationHeadline>
                <NavigationItem
                    icon={<FolderIcon />}
                >
                    Friends
                </NavigationItem>
                <NavigationItem
                    icon={<FolderIcon />}
                >
                    Volunteering
                </NavigationItem>
                <NavigationItem
                    icon={<FolderIcon />}
                >
                    Work
                </NavigationItem>
            </NavigationList>
        </div>
    );
};

export default MailNavigation;
