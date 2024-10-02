"use client";

import React from "react";
import { TabsContext, TabsContextProps } from "@andore-ui/tabs";

interface TabProviderProps extends TabsContextProps {}

const TabProvider = (props: TabProviderProps) => {
  return <TabsContext {...props} />;
};

export default TabProvider;
