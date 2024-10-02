"use client";

import React from "react";
import TabProvider from "@/app/_components/Tabs/TabProvider";
import TabsList from "@/app/_components/Tabs/TabsList";
import Tab from "@/app/_components/Tabs/Tab";
import NpmIcon from "@/app/_components/icons/NpmIcon";
import YarnIcon from "@/app/_components/icons/YarnIcon";
import PnpmIcon from "@/app/_components/icons/PnpmIcon";
import BunIcon from "@/app/_components/icons/BunIcon";
import PackageManagerTabPanel from "@/app/_components/PackageManagerTabPanel/PackageManagerTabPanel";

interface PackageManagerTabsProps {
  command: React.ReactNode;
}

const PackageManagerTabs = (props: PackageManagerTabsProps) => {
  const { command } = props;
  return (
    <TabProvider defaultValue="npm">
      <div className="flex">
        <TabsList inline className="bg-transparent dark:bg-transparent">
          <Tab value={"npm"} icon={<NpmIcon />}>
            npm
          </Tab>
          <Tab value={"yarn"} icon={<YarnIcon />}>
            yarn
          </Tab>
          <Tab value={"pnpm"} icon={<PnpmIcon />}>
            pnpm
          </Tab>
          <Tab value={"bun"} icon={<BunIcon />}>
            bun
          </Tab>
        </TabsList>
      </div>
      <PackageManagerTabPanel value={"npm"}>
        <span className={"token literal-property property"}>npm install </span>
        <span className={"token string"}>{command}</span>
      </PackageManagerTabPanel>
      <PackageManagerTabPanel value={"yarn"}>
        <span className={"token literal-property property"}>yarn add </span>
        <span className={"token string"}>{command}</span>
      </PackageManagerTabPanel>
      <PackageManagerTabPanel value={"pnpm"}>
        <span className={"token literal-property property"}>pnpm add </span>
        <span className={"token string"}>{command}</span>
      </PackageManagerTabPanel>
      <PackageManagerTabPanel value={"bun"}>
        <span className={"token literal-property property"}>bun add </span>
        <span className={"token string"}>{command}</span>
      </PackageManagerTabPanel>
    </TabProvider>
  );
};

export default PackageManagerTabs;
