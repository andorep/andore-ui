import React from "react";
import MailHeader from "@/app/@mail/_components/MailHeader/MailHeader";
import MailNavigation from "@/app/@mail/_components/MailNavigation/MailNavigation";
import MailMain from "@/app/@mail/_components/MailMain/MailMain";

const Mail = () => {
  // get size of the window
  return (
    <section className="App h-[600px] flex flex-row  mx-auto container  lg:px-2">
      <div className={"flex flex-row w-full h-full border border-outline-variant bg-surface-container-low dark:bg-surface-dark-DEFAULT rounded"}>
          <MailNavigation />
          <div className={"Main flex flex-col flex-1 h-auto px-3 xl:pl-0"}>
              <MailHeader />
              <MailMain />
          </div>
      </div>
    </section>
  );
};

export default Mail;
