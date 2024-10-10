import React from "react";
import {ButtonProps} from "./Button.types";
import {twMerge} from "tailwind-merge";
import {
    ButtonBaseDisabledClassNameMap,
    ButtonBaseEndIconClassName, ButtonBaseSpanPaddingClassName,
    ButtonBaseStartIconClassName,
    ButtonVariantClassNameMap,
    VariantContentClassNameMap,
} from "./Button.classes";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const {
            children,
            className,
            color = "primary",
            variant = "elevated",
            type = "button",
            startIcon,
            endIcon,
            ...rest
        } = props;
        let classes = className;
        if (props.disabled) {
            classes = twMerge(classes, ButtonBaseDisabledClassNameMap[variant]);
        } else {
            const variantClassName = ButtonVariantClassNameMap[variant][color];
            classes = twMerge(variantClassName, classes);
        }


        const spanClassName = props.disabled ? ButtonBaseSpanPaddingClassName : VariantContentClassNameMap[variant][color];

        return (
            <button type={type} ref={ref} {...rest} className={classes}>
                <span className={spanClassName}>
                  {startIcon && (
                      <span className={ButtonBaseStartIconClassName}>{startIcon}</span>
                  )}
                    {children}
                    {endIcon && (
                        <span className={ButtonBaseEndIconClassName}>{endIcon}</span>
                    )}
                </span>
            </button>
        );
    },
);

export default Button;
