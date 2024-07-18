import React from "react";
import { twMerge } from "tailwind-merge";
import { Avatar as RadixAvatar } from "@radix-ui/react-avatar";
import { AvatarProps } from "./Avatar.types";
import { AvatarColorMapClassName } from "./Avatar.classes";

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (props, forwardedRef) => {
    const { className, color = "primary", ...rest } = props;
    const baseClassName = AvatarColorMapClassName[color];
    const classes = twMerge(baseClassName, className);
    return <RadixAvatar {...rest} ref={forwardedRef} className={classes} />;
  },
);

export default Avatar;
