import React from 'react';
import {Tabs as RadixTabsContext } from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';
import { TabsContextProps } from './TabsContext.types';
import { TabsContextBaseClassName } from './TabsContext.classes';

const TabsContext = React.forwardRef<HTMLDivElement, TabsContextProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(TabsContextBaseClassName, className);
    return (
      <RadixTabsContext {...rest} ref={forwardedRef} className={classes} >
          {children}
      </RadixTabsContext>
    );
});

export default TabsContext;
