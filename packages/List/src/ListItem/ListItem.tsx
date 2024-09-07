import React from 'react';
import {twMerge} from 'tailwind-merge';
import {ListItemProps} from './ListItem.types';
import {
    ListItemBaseClassName,
    ListItemBaseClickableClassName,
    ListItemStateActionEffectClassName,
    ListItemStateClassName
} from './ListItem.classes';

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>((props, forwardedRef) => {
    const {children, className, onClick, ...rest} = props;
    const clickableClasses = onClick ? ListItemBaseClickableClassName : '';
    const classes = twMerge(ListItemBaseClassName, clickableClasses, className);
    const actionEffectClasses = onClick ? ListItemStateActionEffectClassName : '';
    const stateClasses = twMerge(ListItemStateClassName, actionEffectClasses);
    return (
        <li {...rest} ref={forwardedRef} className={classes} onClick={onClick}>
            <span className={stateClasses}>
                {children}
            </span>
        </li>
    );
});

export default ListItem;
