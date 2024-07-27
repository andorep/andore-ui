import React from 'react';
import {twMerge} from 'tailwind-merge';
import {SurfaceProps} from './Surface.types';
import {SurfaceBaseContentMapClassName, SurfaceBaseMapClassName} from './Surface.classes';

const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>((props, forwardedRef) => {
    const {children, className, variant = 'elevated', ...rest} = props;

    const surfaceVariantClassName = SurfaceBaseMapClassName[variant];
    const classesRoot = twMerge(surfaceVariantClassName, className);

    const surfaceContentVariantClassName = SurfaceBaseContentMapClassName[variant];
    const classesContent = twMerge(surfaceContentVariantClassName, className);
    return (
        <div {...rest} ref={forwardedRef} className={classesRoot}>
            <div className={classesContent}>
                {children}
            </div>
        </div>
    );
});

export default Surface;
