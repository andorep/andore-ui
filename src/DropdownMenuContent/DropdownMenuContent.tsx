import React from 'react';
import {twMerge} from 'tailwind-merge';
import {DropdownMenuContent as RadixDropdownMenuContent} from "@radix-ui/react-dropdown-menu";
import {DropdownMenuContentProps} from './DropdownMenuContent.types';
import {
    DropdownMenuContentBaseClassName, DropdownMenuContentCondensedClassName,
    DropdownMenuSurfaceClassName,
    DropdownMenuTintClassName
} from './DropdownMenuContent.classes';
import {useDropdownMenuTheme} from "../DropdownMenu";

const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>((props, forwardedRef) => {
    const {className, children, ...rest} = props;
    const {condensed} = useDropdownMenuTheme();
    const condensedClass = condensed ? DropdownMenuContentCondensedClassName : '';
    const classes = twMerge(DropdownMenuContentBaseClassName, condensedClass, className);
    return (
        <RadixDropdownMenuContent
            {...rest}
            ref={forwardedRef}
            className={classes}
        >
            <div className={DropdownMenuSurfaceClassName}>
                <div className={DropdownMenuTintClassName}>
                    {children}
                </div>
            </div>
        </RadixDropdownMenuContent>
    );
});

export default DropdownMenuContent;
