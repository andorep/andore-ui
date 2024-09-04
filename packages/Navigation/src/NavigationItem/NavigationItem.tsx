import React from 'react';
import {twMerge} from 'tailwind-merge';
import {NavigationItemProps} from './NavigationItem.types';
import {
    NavigationItemBaseActiveClassName,
    NavigationItemBaseClassName,
    NavigationItemBaseCondensedClassName, NavigationItemBaseIconOnlyClassName,
    NavigationItemBaseVariantClassNameMap,
    NavigationItemIconClassName,
    NavigationItemLabelClassName,
    NavigationItemStateClassName, NavigationItemTrailingClassName, NavigationItemTrailingDotClassName
} from './NavigationItem.classes';
import useNavigationTheme from '../NavigationList/useNavigationTheme';


const NavigationItem = React.forwardRef<HTMLAnchorElement, NavigationItemProps>((props, forwardedRef) => {
    const {children, className, active, icon, trailing, ...rest} = props;

    const {condensed, variant, iconOnly} = useNavigationTheme();

    const variantValue = iconOnly ? 'standard' : variant;
    const isVertical = variantValue === 'vertical';
    const variantClasses = variant ? NavigationItemBaseVariantClassNameMap[variantValue] : '';
    const iconOnlyClasses = iconOnly ? NavigationItemBaseIconOnlyClassName : '';
    const condensedClasses = condensed ? NavigationItemBaseCondensedClassName : '';
    const activeClasses = active ? NavigationItemBaseActiveClassName : '';
    const classes = twMerge(NavigationItemBaseClassName, activeClasses, condensedClasses, variantClasses, iconOnlyClasses, className);

    const stateClasses = twMerge(NavigationItemStateClassName);

    const iconClasses = twMerge(NavigationItemIconClassName);

    const labelClasses = twMerge(NavigationItemLabelClassName);

    const isDotTrailing = isVertical && typeof trailing === 'number' && trailing <= 1;
    const dotTrailingClasses =  isDotTrailing ? NavigationItemTrailingDotClassName : '';
    const trailingClasses = twMerge(NavigationItemTrailingClassName, dotTrailingClasses);

    const showLabel = !iconOnly;

    const showTrailing = trailing && !iconOnly;

    const showVertical = variantValue === 'vertical';

    const trailingValue= isDotTrailing ? '' : trailing;


    return (
        <a {...rest} ref={forwardedRef} className={classes}>
          <span className={stateClasses}>
              {icon && (<span className={iconClasses}>{icon}</span>)}
              {!showVertical && showLabel && <span className={labelClasses}>{children}</span>}
              {showTrailing && (<span className={trailingClasses}>{trailingValue}</span>)}
          </span>
            {showVertical && showLabel && <span className={labelClasses}>{children}</span>}
        </a>
    );
});

export default NavigationItem;
