import React from "react";
import {twMerge} from "tailwind-merge";
import {
    TypographyProps,
    TypographySizes,
    TypographyVariants,
} from "./Typography.types";
import {TypographyColorMapClassName, TypographyMapClassName} from "./Typography.classes";

const variantMap: Record<
    TypographyVariants,
    Record<TypographySizes, React.ElementType>
> = {
    display: {
        lg: "h1",
        md: "h1",
        sm: "h1",
    },
    headline: {
        lg: "h2",
        md: "h3",
        sm: "h4",
    },
    title: {
        lg: "h5",
        md: "h6",
        sm: "h6",
    },
    body: {
        lg: "p",
        md: "p",
        sm: "p",
    },
};

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
    (props, forwardedRef) => {
        const {
            children,
            className,
            variant = "body",
            size = "md",
            color,
            component,
            ...rest
        } = props;

        const Element = component ?? variantMap[variant][size];

        const classVariant = TypographyMapClassName[variant][size];

        const colorVariant = color ? TypographyColorMapClassName[color] : "";

        const classes = twMerge(classVariant, colorVariant, className);

        return (
            <Element ref={forwardedRef} className={classes} {...rest}>
                {children}
            </Element>
        );
    },
);

export default Typography;
