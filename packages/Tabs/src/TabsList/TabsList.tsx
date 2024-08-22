import React from 'react';
import {TabsList as RadixTabsList} from '@radix-ui/react-tabs';
import {twMerge} from 'tailwind-merge';
import {TabsListProps} from './TabsList.types';
import {TabsListBaseClassName, TabsListInlineClassName} from './TabsList.classes';

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>((props, forwardedRef) => {
    const {children, className, inline, ...rest} = props;

    const inlineClasses = inline ? TabsListInlineClassName : "";
    const classes = twMerge(TabsListBaseClassName, inlineClasses, className);

    return (
        <RadixTabsList {...rest} ref={forwardedRef} className={classes}>
            {children}
        </RadixTabsList>
    );
});

export default TabsList;
