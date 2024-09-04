import React from 'react';
import {twMerge} from 'tailwind-merge';
import {NavigationListProps} from './NavigationList.types';
import {NavigationListBaseClassName, NavigationListBaseVariantClassNameMap} from './NavigationList.classes';
import {NavigationThemeContext} from "./useNavigationTheme";

const NavigationList = React.forwardRef<HTMLElement, NavigationListProps>((props, forwardedRef) => {
    const {children, className, condensed = false, variant = 'standard', iconOnly = false, ...rest} = props;
    const variantValue = iconOnly ? 'standard' : variant;
    const variantClasses = variantValue ? NavigationListBaseVariantClassNameMap[variantValue] : '';
    const classes = twMerge(NavigationListBaseClassName, variantClasses, className);
    return (
        <NavigationThemeContext.Provider value={{variant: variantValue, condensed, iconOnly}}>
            <nav {...rest} ref={forwardedRef} className={classes}>
                {children}
            </nav>
        </NavigationThemeContext.Provider>
    );
});

export default NavigationList;
