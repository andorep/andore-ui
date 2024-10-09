import {Tabs as RadixTabsContext } from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';
import { TabsContextProps } from './TabsContext.types';
import { TabsContextBaseClassName } from './TabsContext.classes';

const TabsContext = (props: TabsContextProps) => {
    const { children, className, ...rest } = props;
    const classes = twMerge(TabsContextBaseClassName, className);
    return (
      <RadixTabsContext {...rest} className={classes} >
          {children}
      </RadixTabsContext>
    );
};

export default TabsContext;
