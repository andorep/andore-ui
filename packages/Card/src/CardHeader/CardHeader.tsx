import React from 'react';
import {twMerge} from 'tailwind-merge';
import {CardHeaderProps} from './CardHeader.types';
import {
    CardHeaderBaseClassName,
    CardHeaderGuttersClassName,
    CardHeaderSubtitleClassName,
    CardHeaderTitleClassName, CardHeaderTitleSubtitleContainerClassName
} from './CardHeader.classes';

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>((props, forwardedRef) => {
    const {
        children,
        className,
        title,
        subtitle,
        avatar,
        action,
        disableGutters,
        ...rest
    } = props;
    const guttersClassName = disableGutters ? '' : CardHeaderGuttersClassName;
    const classes = twMerge(CardHeaderBaseClassName, guttersClassName, className);
    return (
        <div {...rest} ref={forwardedRef} className={classes}>
            {avatar && <div className="flex-shrink-0">{avatar}</div>}
            <div className={CardHeaderTitleSubtitleContainerClassName}>
                {title && <span className={CardHeaderTitleClassName}>{title}</span>}
                {subtitle && <span className={CardHeaderSubtitleClassName}>{subtitle}</span>}
            </div>
            {action && <div className="flex-shrink-0">{action}</div>}
        </div>
    );
});

export default CardHeader;
