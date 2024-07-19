import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DialogClose as RadixDialogClose} from "@radix-ui/react-dialog";
import { DialogCloseProps } from './DialogClose.types';
import { DialogCloseBaseClassName } from './DialogClose.classes';

const DialogClose = React.forwardRef<HTMLButtonElement, DialogCloseProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DialogCloseBaseClassName, className);
    return (
        <RadixDialogClose
            {...rest}
            ref={forwardedRef}
            className={classes}
        />
    );
});

export default DialogClose;
