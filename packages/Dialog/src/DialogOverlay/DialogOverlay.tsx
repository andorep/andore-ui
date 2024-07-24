import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DialogOverlay as RadixDialogOverlay} from "@radix-ui/react-dialog";
import { DialogOverlayProps } from './DialogOverlay.types';
import { DialogOverlayBaseClassName } from './DialogOverlay.classes';

const DialogOverlay = React.forwardRef<HTMLDivElement, DialogOverlayProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DialogOverlayBaseClassName, className);
    return (
    <RadixDialogOverlay
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DialogOverlay;
