import React from 'react';
import { twMerge } from 'tailwind-merge';
import {DialogDescription as RadixDialogDescription} from "@radix-ui/react-dialog";
import { DialogDescriptionProps } from './DialogDescription.types';
import { DialogDescriptionBaseClassName } from './DialogDescription.classes';

const DialogDescription = React.forwardRef<HTMLDivElement, DialogDescriptionProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(DialogDescriptionBaseClassName, className);
    return (
    <RadixDialogDescription
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default DialogDescription;
