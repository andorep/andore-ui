 import React from 'react';
import { twMerge } from 'tailwind-merge';
import {AlertDialogOverlay as RadixAlertDialogOverlay} from "@radix-ui/react-alert-dialog";
import { AlertDialogOverlayProps } from './AlertDialogOverlay.types';
import { AlertDialogOverlayBaseClassName } from './AlertDialogOverlay.classes';

const AlertDialogOverlay = React.forwardRef<HTMLDivElement, AlertDialogOverlayProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(AlertDialogOverlayBaseClassName, className);
    return (
    <RadixAlertDialogOverlay
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default AlertDialogOverlay;
