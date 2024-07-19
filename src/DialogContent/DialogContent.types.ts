import {PropsWithChildren} from 'react';
import type {DialogContentProps as RadixDialogContentProps} from "@radix-ui/react-dialog";

export type DialogContentSizes = 'sm' | 'md' | 'lg';

export interface DialogContentProps extends PropsWithChildren<RadixDialogContentProps> {
    size?: DialogContentSizes;
}
