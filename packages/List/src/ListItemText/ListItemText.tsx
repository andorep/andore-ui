import React from 'react';
import {twMerge} from 'tailwind-merge';
import {ListItemTextProps} from './ListItemText.types';
import {
    ListItemTextBaseClassName,
    ListItemTextSupportingTextBaseClassName
} from './ListItemText.classes';

const ListItemText = React.forwardRef<HTMLSpanElement, ListItemTextProps>((props, forwardedRef) => {
    const {children, className, supportingText, ...rest} = props;

    const classes = twMerge(ListItemTextBaseClassName, className);

    const supportingTextClasses = twMerge(ListItemTextSupportingTextBaseClassName);

    return (
        <span {...rest} ref={forwardedRef} className={classes}>
            {children}
            {supportingText && <span className={supportingTextClasses}>{supportingText}</span>}
      </span>
    );
});

export default ListItemText;
