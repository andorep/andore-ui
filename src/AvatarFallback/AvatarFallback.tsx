import React from 'react';
import { twMerge } from 'tailwind-merge';
import {AvatarFallback as RadixAvatarFallback} from "@radix-ui/react-avatar";
import { AvatarFallbackProps } from './AvatarFallback.types';
import { AvatarFallbackBaseClassName } from './AvatarFallback.classes';

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(AvatarFallbackBaseClassName, className);
    return (
    <RadixAvatarFallback
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default AvatarFallback;
