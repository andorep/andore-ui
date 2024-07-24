import { PropsWithChildren } from 'react';
import type { AlertDialogContentProps as RadixAlertDialogContentProps } from "@radix-ui/react-alert-dialog";

export type AlertDialogContentSizes = "lg" | "md" | "sm" ;

export interface AlertDialogContentProps extends PropsWithChildren<RadixAlertDialogContentProps> {
    size?: AlertDialogContentSizes;
}
