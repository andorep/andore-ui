"use client";

import React from "react";
import { TabsContext, TabsContextProps } from "@andore-ui/tabs";

const TabProvider = (props: TabsContextProps) => {
  return <TabsContext {...props} />;
};

export default TabProvider;
