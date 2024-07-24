import {PropsWithChildren} from 'react';
import type {ProgressProps as RadixProgressProps} from "@radix-ui/react-progress";

export type LinearProgressSizes = "sm" | "md";

export interface LinearProgressProps extends PropsWithChildren<RadixProgressProps> {
    size?: LinearProgressSizes;
}
