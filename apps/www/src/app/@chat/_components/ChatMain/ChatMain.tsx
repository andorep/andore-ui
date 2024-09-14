import React from "react";
import { fetchChat } from "@/app/@chat/_data/chat.data";
import ChatTabList from "@/app/@chat/_components/ChatTabList/ChatTabList";

const ChatMain = async () => {
  const chatList = await fetchChat();
  return (
    <div className="flex rounded-t w-full flex-grow overflow-auto bg-surface-container-lowest dark:bg-surface-dark-container-lowest">
      <ChatTabList  items={chatList} />
    </div>
  );
};

export default ChatMain;
