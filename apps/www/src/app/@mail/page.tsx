import React from "react";
import MailHeader from "@/app/@mail/_components/MailHeader/MailHeader";
import MailNavigation from "@/app/@mail/_components/MailNavigation/MailNavigation";
import MailMain from "@/app/@mail/_components/MailMain/MailMain";

const Mail = () => {
  return (
    <section className="App h-[600px] flex flex-row border border-outline-variant mx-auto container bg-surface-container-low dark:bg-surface-dark-DEFAULT rounded">
      <MailNavigation />
      <div className={"Main flex flex-col flex-1 h-auto"}>
        <MailHeader />
        <MailMain />
      </div>
    </section>
  );
};

export default Mail;
