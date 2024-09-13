"use client";
import React from "react";
import ChatList from "@/app/@chat/_components/ChatList/ChatList";
import { Chat } from "@/app/@chat/_data/chat.data";
import { Typography } from "@material-tailwind-ui/typography";
import {
  ToggleButton,
} from "@material-tailwind-ui/toggle-button";
import MarkChatUnread from "@/app/@chat/_components/icons/MarkChatUnread";

interface ChatTabListProps {
  items: Chat[];
}

const ChatTabList = ({ items }: ChatTabListProps) => {
  const [isUnread, setIsUnread] = React.useState(false);
  return (
    <section className={"overflow-auto flex-1 flex-col"}>
      <div className={"flex flex-row justify-between items-center p-4"}>
        <Typography variant={"title"} size={"sm"}>
          Home
        </Typography>
        <div className={' group/root MTToggleButtonGroup-density-2'}>
          <ToggleButton
              startIcon={<MarkChatUnread />}
              selected={isUnread}
              onClick={() => setIsUnread(!isUnread)}
          >
            Unread
          </ToggleButton>
        </div>
      </div>
      <ChatList items={items} />
    </section>
  );
};

export default ChatTabList;
