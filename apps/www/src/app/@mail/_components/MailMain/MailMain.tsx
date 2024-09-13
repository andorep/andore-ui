import React from "react";
import { fetchMail } from "@/app/@mail/_data/mail.data";
import MailTabList from "@/app/@mail/_components/MailTabList/MailTabList";

const MailMain = async () => {
  const flightsMails = await fetchMail("flights");
  return (
    <div className="flex rounded-t w-full flex-grow bg-surface-container-lowest overflow-auto">
      <MailTabList  items={flightsMails} />
    </div>
  );
};

export default MailMain;
