import React from 'react';
import {TabsTrigger as RadixTab} from '@radix-ui/react-tabs';
import {twMerge} from 'tailwind-merge';
import {TabProps} from './Tab.types';
import {
    TabActivatorIndicatorClassName,
    TabBadgeClassName,
    TabBadgeDotClassName,
    TabBadgeInlineClassName,
    TabBadgeNotInlineClassName,
    TabBadgeSingleDigitClassName,
    TabBaseClassName, TabBaseContentClassName,
    TabBaseWithIconClassName,
    TabIconClassName
} from './Tab.classes';

const Tab = React.forwardRef<HTMLButtonElement, TabProps>((props, forwardedRef) => {
    const {children, className, icon, badge, onClick, ...rest} = props;

    const withIconClasses = icon ? TabBaseWithIconClassName : "";
    const classes = twMerge(TabBaseClassName, withIconClasses, className);

    const classesContent = twMerge(TabBaseContentClassName);

    const iconClasses = twMerge(TabIconClassName);

    const badgeDotClasses = badge == 1 ? TabBadgeDotClassName : "";

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const badgeSingleDigitClasses = badge < 10 ? TabBadgeSingleDigitClassName : "";
    const badgeClasses = twMerge(TabBadgeClassName, badgeSingleDigitClasses, badgeDotClasses);


    const badgeClassesNotInline = twMerge(badgeClasses, TabBadgeNotInlineClassName);
    const badgeClassesInline = twMerge(badgeClasses, TabBadgeInlineClassName);

    const isBadgeEmpty = badge === 0 || badge == null;

    let badgeText = badge?.toString() || '';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (badge > 999) {
        badgeText = '999+';
    }
    if (badge === 1) {
        badgeText = '';
    }


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        scrollToElement(event.currentTarget);
        if (onClick) {
            onClick(event);
        }
    }

    const scrollToElement = (targetElementRef: HTMLButtonElement) => {
        if (targetElementRef) {
            targetElementRef.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest', // Not relevant for horizontal scrolling
                inline: 'center', // Centers the element horizontally
            });

        }
    };

    return (
        <RadixTab {...rest} ref={forwardedRef} className={classes} onClick={handleClick}>
            <span className={classesContent}>
            {icon && (
                <span className={iconClasses}>
                    {icon}
                    {!isBadgeEmpty && <span className={badgeClassesNotInline}>{badgeText}</span>}
                </span>
            )}
                {children}
                {!isBadgeEmpty && <span className={badgeClassesInline}>{badgeText}</span>}
                <hr className={TabActivatorIndicatorClassName}/>
            </span>
        </RadixTab>
    );
});

export default Tab;
