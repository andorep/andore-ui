import React from 'react';
import {twMerge} from 'tailwind-merge';
import {SurfaceProps} from './Surface.types';
import {
    SurfaceBaseContentMapClassName,
    SurfaceBaseElevationClassNameMap,
    SurfaceBaseMapClassName
} from './Surface.classes';

const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>((props, forwardedRef) => {
    const {children, className, variant = 'elevated', elevation=1, ...rest} = props;

    const surfaceElevationClassName = SurfaceBaseElevationClassNameMap[elevation] ?? '';
    const surfaceVariantClassName = SurfaceBaseMapClassName[variant];
    const classesRoot = twMerge(surfaceVariantClassName,surfaceElevationClassName, className);

    const surfaceContentVariantClassName = SurfaceBaseContentMapClassName[variant];
    const classesContent = twMerge(surfaceContentVariantClassName);
    return (
        <div {...rest} ref={forwardedRef} className={classesRoot}>
            <div className={classesContent}>
                {children}
            </div>
        </div>
    );
});

export default Surface;
