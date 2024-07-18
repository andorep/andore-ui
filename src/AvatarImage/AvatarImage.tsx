import React from 'react';
import { twMerge } from 'tailwind-merge';
import {AvatarImage as RadixAvatarImage} from "@radix-ui/react-avatar";
import { AvatarImageProps } from './AvatarImage.types';
import { AvatarImageBaseClassName } from './AvatarImage.classes';

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>((props, forwardedRef) => {
   const { className, ...rest } = props;
   const classes = twMerge(AvatarImageBaseClassName, className);
    return (
    <RadixAvatarImage
        {...rest}
        ref={forwardedRef}
        className={classes}
    />
    );
});

export default AvatarImage;
