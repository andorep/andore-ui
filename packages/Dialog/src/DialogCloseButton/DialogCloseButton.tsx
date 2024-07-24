import React from 'react';
import { twMerge } from 'tailwind-merge';
import { DialogCloseButtonProps } from './DialogCloseButton.types';
import { DialogCloseButtonBaseClassName } from './DialogCloseButton.classes';
import {DialogClose} from "@radix-ui/react-dialog";

const DialogCloseButton = React.forwardRef<HTMLButtonElement, DialogCloseButtonProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(DialogCloseButtonBaseClassName, className);
    return (
      <DialogClose {...rest} ref={forwardedRef} className={classes} asChild>
          <button type={'button'}>
              {children}
          </button>
      </DialogClose>
    );
});

export default DialogCloseButton;
