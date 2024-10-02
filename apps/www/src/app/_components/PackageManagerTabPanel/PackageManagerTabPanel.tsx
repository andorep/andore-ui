import React from "react";
import TabPanel from "@/app/_components/Tabs/TabPanel";
import { TabPanelProps } from "@andore-ui/tabs";

const PackageManagerTabPanel = (props: TabPanelProps) => {
  const { children } = props;
  return (
    <TabPanel {...props} className={"mt-4"}>
      <pre className={"code-block"}>
        <pre className="language-js">
          <code className="language-js code-highlight">
            <span className="code-line">{children}</span>
          </code>
        </pre>
      </pre>
    </TabPanel>
  );
};

export default PackageManagerTabPanel;
