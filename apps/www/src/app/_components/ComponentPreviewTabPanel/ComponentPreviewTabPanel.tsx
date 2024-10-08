import React from "react";
import TabPanel from "@/app/_components/Tabs/TabPanel";
import { TabPanelProps } from "@andore-ui/tabs";
import { twMerge } from "tailwind-merge";

interface ComponentPreviewTabPanelProps extends TabPanelProps {
  value: "preview" | "code";
  className?: string;
}

const ComponentPreviewTabPanel = (props: ComponentPreviewTabPanelProps) => {
  const { children, value, className } = props;
  const isCode = value === "code";

  const rootClasses = twMerge("mt-4 overflow-auto h-96", className);

  return (
    <TabPanel {...props} value={value} className={rootClasses}>
      <div
        className={`${isCode ? "code-block" : ""} min-h-fit h-full data-[content=preview]:bg-surface dark:data-[content=preview]:bg-surface-dark-DEFAULT data-[content=preview]:rounded data-[content=preview]:p-4`}
        data-content={value}
      >
        {children}
      </div>
    </TabPanel>
  );
};

export default ComponentPreviewTabPanel;
