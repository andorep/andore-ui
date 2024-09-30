import React from 'react';
import {twMerge} from 'tailwind-merge';
import {Progress as RadixProgress} from "@radix-ui/react-progress";
import {LinearProgressProps} from './LinearProgress.types';
import {LinearProgressBaseClassName, LinearProgressSizeMapClassName} from './LinearProgress.classes';
import LinearProgressIndicator from "../LinearProgressIndicator";

const LinearProgress = React.forwardRef<HTMLDivElement, LinearProgressProps>((props, forwardedRef) => {
    const {className, children, value, max, size = 'md', ...rest} = props;
    const sizeClassName = size ? ` ${LinearProgressSizeMapClassName[size]}` : '';
    const classes = twMerge(LinearProgressBaseClassName, sizeClassName, className);
    let progress = value;
    if (progress == null) {
        progress = 0
    }
    let maxLinearProgress = max;
    if(maxLinearProgress == null && value !=null){
        maxLinearProgress = 100
    }
    return (
        <RadixProgress
            {...rest}
            value={value}
            max={maxLinearProgress}
            ref={forwardedRef}
            className={classes}
        >
            {children}
            {!children && <LinearProgressIndicator style={{transform: `translateX(-${100 - progress}%)`}} aria-label={props['aria-label']} />}
        </RadixProgress>
    );
});

export default LinearProgress;
