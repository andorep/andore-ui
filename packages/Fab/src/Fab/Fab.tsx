import React from 'react';
import {twMerge} from 'tailwind-merge';
import {FabProps} from './Fab.types';
import {
    FabBaseMapClassName,
    FabBaseSizeMapClassName,
    FabContentMapClassName,
    FabContentSizeMapClassName,
    FabIconClassName,
    FabTextClassName
} from './Fab.classes';

const Fab = React.forwardRef<HTMLButtonElement, FabProps>((props, forwardedRef) => {
    const {children, className, color = 'primary', size = 'medium', icon, ...rest} = props;

    const classesColor = FabBaseMapClassName[color]
    const classesSize = FabBaseSizeMapClassName[size]
    const classes = twMerge(classesColor, classesSize, className);

    const classesContentColor = FabContentMapClassName[color]
    const classesContentSize = FabContentSizeMapClassName[size]
    const classesContent = twMerge(classesContentColor, classesContentSize);

    return (
        <button {...rest} ref={forwardedRef} className={classes}>
            <span className={classesContent}>
                {icon && <span className={FabIconClassName}>{icon}</span>}
                {children && <span className={FabTextClassName}>{children}</span>}
            </span>
        </button>
    );
});

export default Fab;
