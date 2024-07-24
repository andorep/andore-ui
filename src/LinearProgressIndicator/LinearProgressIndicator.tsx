import React from 'react';
import { twMerge } from 'tailwind-merge';
import {Progress as RadixProgressIndicator} from "@radix-ui/react-progress";
import { LinearProgressIndicatorProps } from './LinearProgressIndicator.types.ts';
import { LinearProgressIndicatorBaseClassName } from './LinearProgressIndicator.classes.ts';

const LinearProgressIndicator = React.forwardRef<HTMLDivElement, LinearProgressIndicatorProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(LinearProgressIndicatorBaseClassName, className);
    return (
    <RadixProgressIndicator
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default LinearProgressIndicator;
