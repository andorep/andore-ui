import {twMerge} from "tailwind-merge";

export const RadioButtonIndicatorBaseClassName = twMerge(
    "MTRadioButtonIndicator-root",
    "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet-100",
)
