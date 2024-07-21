import React from 'react';
import {twMerge} from 'tailwind-merge';
import {DropdownMenuSubContent as RadixDropdownMenuSubContent} from "@radix-ui/react-dropdown-menu";
import {DropdownMenuSubContentProps} from './DropdownMenuSubContent.types';
import {
    DropdownMenuSubContentBaseClassName,
    DropdownMenuSubSurfaceClassName,
    DropdownMenuSubTintClassName,
    DropdownMenuSubCondensedClassName,
} from './DropdownMenuSubContent.classes';
import {useDropdownMenuTheme} from "../DropdownMenu";

const DropdownMenuSubContent = React.forwardRef<HTMLDivElement, DropdownMenuSubContentProps>((props, forwardedRef) => {
    const {className,children, ...rest} = props;
    const {condensed} = useDropdownMenuTheme();
    const condensedClass = condensed ? DropdownMenuSubCondensedClassName : '';
    const classes = twMerge(DropdownMenuSubContentBaseClassName,condensedClass, className);
    return (
        <RadixDropdownMenuSubContent
            {...rest}
            ref={forwardedRef}
            className={classes}
        >
            <div className={DropdownMenuSubSurfaceClassName}>
                <div className={DropdownMenuSubTintClassName}>
                    {children}
                </div>
            </div>
        </RadixDropdownMenuSubContent>
    );
});

export default DropdownMenuSubContent;
