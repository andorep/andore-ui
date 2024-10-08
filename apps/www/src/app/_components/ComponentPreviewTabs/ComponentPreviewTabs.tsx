"use client";

import React from "react";
import TabProvider from "@/app/_components/Tabs/TabProvider";
import TabsList from "@/app/_components/Tabs/TabsList";
import Tab from "@/app/_components/Tabs/Tab";

interface ComponentPreviewTabsProps {
  children: React.ReactNode;
}

const ComponentPreviewTabs = (props: ComponentPreviewTabsProps) => {
  const { children } = props;
  return (
    <TabProvider defaultValue="preview">
      <div className="flex">
        <TabsList inline className="bg-transparent dark:bg-transparent">
          <Tab value={"preview"}>Preview</Tab>
          <Tab value={"code"}>Code</Tab>
        </TabsList>
      </div>
      {children}
    </TabProvider>
  );
};

export default ComponentPreviewTabs;
