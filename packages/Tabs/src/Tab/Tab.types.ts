import React from "react";
import { TabsTriggerProps as RadixTabProps } from '@radix-ui/react-tabs';
export interface TabProps extends RadixTabProps {
    icon?: React.ReactNode;
    badge?: number;
}
