import React from "react";
import MailHeader from "@/app/@mail/_components/MailHeader/MailHeader";
import MailNavigation from "@/app/@mail/_components/MailNavigation/MailNavigation";
import MailMain from "@/app/@mail/_components/MailMain/MailMain";

const Mail = () => {
  // get size of the window
  return (
    <div
      className={
        "flex flex-row w-full h-full border border-outline-variant bg-surface-container-low dark:bg-surface-dark-DEFAULT rounded"
      }
    >
      <MailNavigation />
      <div
        className={
          "Main flex flex-col flex-1 h-auto px-3 xl:pl-0 overflow-auto"
        }
      >
        <MailHeader />
        <MailMain />
      </div>
    </div>
  );
};

export default Mail;
