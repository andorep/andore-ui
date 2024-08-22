import React from 'react';
import {TabsContent as RadixTabPanel } from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';
import { TabPanelProps } from './TabPanel.types';
import { TabPanelBaseClassName } from './TabPanel.classes';

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>((props, forwardedRef) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(TabPanelBaseClassName, className);
    return (
      <RadixTabPanel {...rest} ref={forwardedRef} className={classes} >
          {children}
      </RadixTabPanel>
    );
});

export default TabPanel;
