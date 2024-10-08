"use client";

import React from "react";
import TabProvider from "@/app/_components/Tabs/TabProvider";
import TabsList from "@/app/_components/Tabs/TabsList";
import Tab from "@/app/_components/Tabs/Tab";
import NpmIcon from "@/app/_components/icons/NpmIcon";
import YarnIcon from "@/app/_components/icons/YarnIcon";
import PackageManagerTabPanel from "@/app/_components/PackageManagerTabPanel/PackageManagerTabPanel";

interface ImportComponentTabsProps {
  components: string;
  library: string;
}

const ImportComponentTabs = (props: ImportComponentTabsProps) => {
  const { components, library } = props;
  return (
    <TabProvider defaultValue="Individual">
      <div className="flex">
        <TabsList inline className="bg-transparent dark:bg-transparent">
          <Tab value={"Individual"} icon={<NpmIcon />}>
            Individual
          </Tab>
          <Tab value={"Global"} icon={<YarnIcon />}>
            Global
          </Tab>
        </TabsList>
      </div>
      <PackageManagerTabPanel value={"Individual"}>
        <span className={"token literal-property property"}>import</span>
        <span className={"token string"}> {`{${components}}`} </span>
        <span className={"token literal-property property"}>from </span>
        <span className={"token string"}>@andore-ui/{library}</span>
      </PackageManagerTabPanel>
        <PackageManagerTabPanel value={"Global"}>
            <span className={"token literal-property property"}>import</span>
            <span className={"token string"}> {`{${components}}`} </span>
            <span className={"token literal-property property"}>from </span>
            <span className={"token string"}>@andore-ui/react</span>
        </PackageManagerTabPanel>
    </TabProvider>
  );
};

export default ImportComponentTabs;
