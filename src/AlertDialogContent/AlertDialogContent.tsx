import React from "react";
import { twMerge } from "tailwind-merge";
import { AlertDialogContent as RadixAlertDialogContent } from "@radix-ui/react-alert-dialog";
import { AlertDialogContentProps } from "./AlertDialogContent.types";
import {
    AlertDialogContentMapClassName,
    AlertDialogContentSurfaceClassName,
    AlertDialogContentTintClassName
} from "./AlertDialogContent.classes";

const AlertDialogContent = React.forwardRef<
  HTMLDivElement,
  AlertDialogContentProps
>((props, forwardedRef) => {
  const { className, children, size='md', ...rest } = props;
  const sizeClassName = AlertDialogContentMapClassName[size];
  const classes = twMerge(sizeClassName, className);
  return (
    <RadixAlertDialogContent {...rest} ref={forwardedRef} className={classes}>
      <div className={AlertDialogContentSurfaceClassName}>
          <div className={AlertDialogContentTintClassName}>
              {children}
          </div>
      </div>
    </RadixAlertDialogContent>
  );
});

export default AlertDialogContent;
