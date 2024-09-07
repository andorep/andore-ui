import React from 'react';
import {twMerge} from 'tailwind-merge';
import {ListProps} from './List.types';
import {ListBaseClassName, ListBaseDividerClassName} from './List.classes';

const List = React.forwardRef<HTMLUListElement, ListProps>((props, forwardedRef) => {
    const {children, className, divider, ...rest} = props;

    const dividerClasses = divider ? ListBaseDividerClassName : '';
    const classes = twMerge(ListBaseClassName, dividerClasses, className);
    return (
        <ul {...rest} ref={forwardedRef} className={classes}>
            {children}
        </ul>
    );
});

export default List;
