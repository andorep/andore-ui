"use client";

import React from "react";
import Block from "@/app/(root)/themes/_components/_blocks/Block/Block";
import { List, ListItem, ListItemText } from "@material-tailwind-ui/list";
import { Avatar, AvatarImage } from "@material-tailwind-ui/avatar";

const DirectMessages = () => {
  return (
    <Block title={"Direct Messages"} subtitle={"3 new messages"}>
      <List>
        <ListItem onClick={() => {}} className={"p-2 rounded h-fit"}>
          <Avatar className={"w-6 h-6"}>
            <AvatarImage src={"./3d_avatar_14.png"} alt="Colm Tuite" />
          </Avatar>
          <ListItemText>Colm Tuite</ListItemText>
        </ListItem>
        <ListItem onClick={() => {}} className={"p-2 rounded h-fit"}>
          <Avatar className={"w-6 h-6"}>
            <AvatarImage src={"./3d_avatar_30.png"} alt="Colm Tuite" />
          </Avatar>
          <ListItemText>Liam McNally</ListItemText>
        </ListItem>
        <ListItem onClick={() => {}} className={"p-2 rounded h-fit"}>
          <Avatar className={"w-6 h-6"}>
            <AvatarImage src={"./3d_avatar_6.png"} alt="Colm Tuite" />
          </Avatar>
          <ListItemText>John Doe</ListItemText>
        </ListItem>
        <ListItem onClick={() => {}} className={"p-2 rounded h-fit"}>
            <Avatar className={"w-6 h-6"}>
                <AvatarImage src={"./3d_avatar_10.png"} alt="Colm Tuite" />
            </Avatar>
            <ListItemText>Jane Doe</ListItemText>
        </ListItem>
        <ListItem onClick={() => {}} className={"p-2 rounded h-fit"}>
            <Avatar className={"w-6 h-6"}>
                <AvatarImage src={"./3d_avatar_13.png"} alt="Colm Tuite" />
            </Avatar>
            <ListItemText>John Smith</ListItemText>
        </ListItem>
      </List>
    </Block>
  );
};

export default DirectMessages;
