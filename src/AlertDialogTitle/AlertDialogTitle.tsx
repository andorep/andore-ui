import React from "react";
import { twMerge } from "tailwind-merge";
import { AlertDialogTitle as RadixAlertDialogTitle } from "@radix-ui/react-alert-dialog";
import { AlertDialogTitleProps } from "./AlertDialogTitle.types";
import {
  AlertDialogIconBaseClassName,
  AlertDialogTitleBaseClassName,
  AlertDialogTitleWithIconBaseClassName,
} from "./AlertDialogTitle.classes";

const AlertDialogTitle = React.forwardRef<
  HTMLDivElement,
  AlertDialogTitleProps
>((props, forwardedRef) => {
  const { className, children, icon, ...rest } = props;
  const titleWithIconClassName =
    icon != null ? AlertDialogTitleWithIconBaseClassName : null;
  const classes = twMerge(
    AlertDialogTitleBaseClassName,
    titleWithIconClassName,
    className,
  );
  return (
    <>
      {icon && <span className={AlertDialogIconBaseClassName}>{icon}</span>}
      <RadixAlertDialogTitle {...rest} ref={forwardedRef} className={classes}>
        {children}
      </RadixAlertDialogTitle>
    </>
  );
});

export default AlertDialogTitle;
