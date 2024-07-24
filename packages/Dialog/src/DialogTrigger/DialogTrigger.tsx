import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DialogTrigger as RadixDialogTrigger} from "@radix-ui/react-dialog";
import { DialogTriggerProps } from './DialogTrigger.types';
import { DialogTriggerBaseClassName } from './DialogTrigger.classes';

const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DialogTriggerBaseClassName, className);
    return (
    <RadixDialogTrigger
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DialogTrigger;
