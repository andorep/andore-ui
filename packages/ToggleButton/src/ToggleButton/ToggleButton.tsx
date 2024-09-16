import React from "react";
import {ToggleButtonProps} from "./ToggleButton.types";
import {twMerge} from "tailwind-merge";
import {
    ToggleButtonBaseDisabledClassName,
    ToggleButtonBaseIconClassName,
    ToggleButtonClassNameMap,
    ToggleButtonStartIconAloneClassName,
    ToggleButtonContentMapClassName
} from "./ToggleButton.classes";


const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={'w-4 h-4'}>
        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
    </svg>
)

const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
    (props, ref) => {
        const {
            children,
            className,
            color = "primary",
            type = "button",
            startIcon,
            checkedIcon = <CheckIcon />,
            selected = false,
            ...rest
        } = props;
        let classes = className;
        if (props.disabled) {
            classes = twMerge(classes, ToggleButtonBaseDisabledClassName);
        } else {
            const variantClassName = ToggleButtonClassNameMap[color];
            classes = twMerge(variantClassName, classes);
        }

        const hasChildren = children != null;

        const showStartIcon = startIcon && !selected || !hasChildren;

        const showCheckedIcon = checkedIcon && selected;

        const startIconClassName = hasChildren ? ToggleButtonBaseIconClassName : ToggleButtonStartIconAloneClassName;

        const contentClassName = ToggleButtonContentMapClassName[color];

        return (
            <button type={type} ref={ref} {...rest} className={classes} aria-pressed={selected}>
                <span className={contentClassName}>
                      {showCheckedIcon && (
                          <span className={ToggleButtonBaseIconClassName}>{checkedIcon}</span>
                      )}
                    {showStartIcon && (
                        <span className={startIconClassName}>{startIcon}</span>
                    )}
                    {children}
                </span>
            </button>
        );
    },
);

export default ToggleButton;
