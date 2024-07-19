import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DialogTitle as RadixDialogTitle} from "@radix-ui/react-dialog";
import { DialogTitleProps } from './DialogTitle.types';
import { DialogTitleBaseClassName } from './DialogTitle.classes';

const DialogTitle = React.forwardRef<HTMLDivElement, DialogTitleProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DialogTitleBaseClassName, className);
    return (
    <RadixDialogTitle
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DialogTitle;
