import {twMerge} from "tailwind-merge";

export const CardMediaBaseClassName = twMerge(
    "MTCardMedia-root",
    "rounded-3xl first:rounded-[inherit]  [&.MTCardMedia-imageGutters]:first:rounded-3xl",
);

export const CardMediaImageGuttersClassName = "MTCardMedia-imageGutters p-2";
