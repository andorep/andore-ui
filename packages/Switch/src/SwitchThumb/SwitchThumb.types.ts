import React from "react";
import { SwitchThumbProps as RadixSwitchThumbProps } from '@radix-ui/react-switch';
export interface SwitchThumbProps extends RadixSwitchThumbProps {
    checkedIcon?: React.ReactNode;
}
