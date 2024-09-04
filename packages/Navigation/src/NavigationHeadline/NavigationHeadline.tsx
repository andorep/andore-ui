import React from 'react';
import {twMerge} from 'tailwind-merge';
import {NavigationHeadlineProps} from './NavigationHeadline.types';
import {
    NavigationHeadlineBaseClassName, NavigationHeadlineCondensedClassName,
    NavigationHeadlineIconOnlyClassName,
    NavigationHeadlineVariantClassNameMap
} from './NavigationHeadline.classes';
import useNavigationTheme from "../NavigationList/useNavigationTheme";

const NavigationHeadline = React.forwardRef<HTMLDivElement, NavigationHeadlineProps>((props, forwardedRef) => {
    const {children, className, ...rest} = props;
    const {condensed, variant, iconOnly} = useNavigationTheme();
    const variantValue = iconOnly ? 'standard' : variant;
    const variantClasses = variant ? NavigationHeadlineVariantClassNameMap[variantValue] : '';
    const condensedClasses = condensed ? NavigationHeadlineCondensedClassName : '';
    const iconOnlyClasses = iconOnly ? NavigationHeadlineIconOnlyClassName : '';
    const classes = twMerge(NavigationHeadlineBaseClassName, variantClasses, condensedClasses, iconOnlyClasses, className);
    return (
        <span {...rest} ref={forwardedRef} className={classes}>
          {children}
      </span>
    );
});

export default NavigationHeadline;
