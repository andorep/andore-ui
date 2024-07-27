import React, {PropsWithChildren} from "react";

export type TypographyColors = "primary" | "secondary" | "info" | "success" | "warning" | "error";

export type TypographyVariants = "display" | "headline" | "title" | "body";

export type TypographySizes = "lg" | "md" | "sm";

export interface TypographyProps
    extends PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>> {
    variant?: TypographyVariants;
    size?: TypographySizes;
    color?: TypographyColors;
}
