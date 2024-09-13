import React from "react";
import ChatHeader from "@/app/@chat/_components/ChatHeader/ChatHeader";
import ChatNavigation from "@/app/@chat/_components/ChatNavigation/ChatNavigation";
import ChatMain from "@/app/@chat/_components/ChatMain/ChatMain";

const Chat = () => {
  // get size of the window
  return (
    <section className="App h-[600px] flex flex-row  mx-auto container xl:px-0 lg:px-2">
      <div className={"flex flex-row w-full h-full border border-outline-variant bg-surface-container-low dark:bg-surface-dark-DEFAULT rounded"}>
          <ChatNavigation />
          <div className={"Main flex flex-col flex-1 h-auto px-3 xl:pl-0"}>
              <ChatHeader />
              <ChatMain />
          </div>
      </div>
    </section>
  );
};

export default Chat;
