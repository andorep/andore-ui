import React from 'react';
import { twMerge } from 'tailwind-merge';
import { CardAvatarProps } from './CardAvatar.types';
import { CardAvatarBaseClassName } from './CardAvatar.classes';

const CardAvatar = React.forwardRef<HTMLImageElement, CardAvatarProps>((props, forwardedRef) => {
    const { className, ...rest } = props;
    const classes = twMerge(CardAvatarBaseClassName, className);
    return (
      <img {...rest} ref={forwardedRef} className={classes} />
    );
});

export default CardAvatar;
