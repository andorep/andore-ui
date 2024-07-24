import React, { PropsWithChildren } from "react";
import type { AlertDialogTitleProps as RadixAlertDialogTitleProps } from "@radix-ui/react-alert-dialog";

export interface AlertDialogTitleProps
  extends PropsWithChildren<RadixAlertDialogTitleProps> {
  icon?: React.ReactNode;
}
