import {twMerge} from "tailwind-merge";

export const TextareaBaseWithPlaceholderClassName = twMerge(
    "MTTextarea-with-placeholder",
)

export const TextareaBaseErrorClassName = twMerge(
    "MTTextarea-error",
)

export const TextareaBaseClassName = twMerge(
    "MTTextarea-root group",
    "transition-all duration-short4 ease-emphasized",
    "flex flex-col relative w-full",
    "h-fit",
)

export const TextareaFilledBaseClassName = twMerge(
    "MTTextarea-filled",
    "rounded-sm rounded-b-none",
)

export const TextareaOutlinedBaseClassName = twMerge(
    "MTTextarea-outlined",
    "rounded-sm",
    "bg-transparent",
)

export const TextareaBaseDisabledClassName = twMerge(
    "MTTextarea-disabled",
    "pointer-events-none",
)

// Large
// "text-lg leading-[24px] tracking-[0.5px]",
// small
//     "text-sm leading-[18px] tracking-[0.4px]",

export const TextareaInputRootClassName = twMerge(
    "MTTextarea-textarea-root group/textareaRoot",
    "flex items-center relative",
    "transition-colors duration-short2 ease-standard",
    "rounded-sm",
    "h-14",
    "border-box",
    "text-base font-normal",
    "outline-none border-none bg-transparent",
    "text-surface-text dark:text-surface-dark-text",
    "h-fit",
)

export const TextareaInputRootFilledClassName = twMerge(
    "MTTextarea-textarea-filled",
    "transition-colors duration-short2 ease-standard",
    "rounded-b-none",
    "bg-surface-container-highest dark:bg-surface-dark-container-highest",
    "border-b border-solid border-surface-text-variant dark:border-surface-dark-text-variant",
    "has-[textarea:focus]:border-primary dark:has-[textarea:focus]:border-primary-dark-DEFAULT",
    "has-[textarea:active]:border-primary dark:has-[textarea:active]:border-primary-dark-DEFAULT",
    "has-[textarea:focus]:border-b-4 has-[textarea:active]:border-b-4",
    "group-[.MTTextarea-error]:border-error dark:group-[.MTTextarea-error]:border-e-error-dark-DEFAULT",
    "group-[.MTTextarea-disabled]:bg-surface-text/[0.04] dark:group-[.MTTextarea-disabled]:bg-surface-dark-text/[0.04]",
    "group-[.MTTextarea-disabled]:border-surface-text/[0.38] dark:group-[.MTTextarea-disabled]:border-surface-dark-text/[0.38]"
)

export const TextareaInputRootOutlinedClassName = twMerge(
    "MTTextarea-textarea-outlined",
    "transition-colors duration-short2 ease-standard",
    "border border-solid",
    "border-outline dark:border-outline-dark",
    "hover:border-surface-text dark:hover:border-surface-dark-text",
    "has-[textarea:focus]:border-2 has-[textarea:active]:border-2",
    "group-[.MTTextarea-error]:border-error dark:group-[.MTTextarea-error]:border-e-error-dark-DEFAULT",
    "group-[.MTTextarea-disabled]:border-surface-text/[0.12] dark:group-[.MTTextarea-disabled]:border-surface-dark-text/[0.12]"
)

export const TextareaInputStateClassName = twMerge(
    "MTTextarea-textarea-state",
    "transition-colors duration-short2 ease-standard",
    "flex flex-1 h-full items-center",
    "pt-5",
)

export const TextareaInputStateFilledClassName = twMerge(
    "MTTextarea-textarea-state-filled",
    "hover:bg-surface-text/[0.08] dark:hover:bg-surface-dark-text/[0.08]",
)

export const TextareaInputStateOutlinedClassName = twMerge(
    "MTTextarea-textarea-state-outlined",
)

export const TextareaInputClassName = twMerge(
    "MTTextarea-textarea",
    "flex-1",
    "transition-[inherit] duration-[inherit] ease-[inherit]",
    "text-base font-normal",
    "outline-none border-none bg-transparent",
    "caret-primary dark:caret-primary-dark-DEFAULT",
    "text-surface-text dark:text-surface-dark-text",
    "placeholder-surface-text-variant dark:placeholder-surface-dark-text-variant",
    "placeholder:transition-opacity placeholder:duration-short4 placeholder:ease-standard",
    "placeholder:peer-[]/label:opacity-0",
    "focus:peer-[]/label:placeholder:opacity-100",
    "active:peer-[]/label:placeholder:opacity-100",
    "group-[.MTTextarea-disabled]:text-surface-text/[0.38] dark:group-[.MTTextarea-disabled]:text-surface-dark-text/[0.38]",
    "group-[.MTTextarea-disabled]:placeholder-surface-text/[0.38] dark:group-[.MTTextarea-disabled]:placeholder-surface-dark-text/[0.38]",
)

const TextareaInputFilledNormalPaddingClassName = twMerge(
    "h-[inherit] px-4",
)

export const TextareaInputFilledClassName = twMerge(
    "MTTextarea-textarea-filled",
    TextareaInputFilledNormalPaddingClassName,
    "group-has-[.MTTextarea-prefix]:pl-0"
)


export const TextareaInputOutlinedClassName = twMerge(
    "MTTextarea-textarea-outlined",
    TextareaInputFilledNormalPaddingClassName,
    "group-has-[.MTTextarea-prefix]:pl-0"
)

export const TextareaLabelClassName = twMerge(
    "MTTextarea-label",
    "transition-all duration-short4 ease-emphasized",
    "peer/label",
    "pointer-events-none",
    "absolute top-4 left-4",
    "text-base font-normal",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "group-has-[textarea:focus]:top-2 group-has-[textarea:focus]:text-xs",
    "group-has-[textarea:active]:top-2 group-has-[textarea:active]:text-xs",
    "group-has-[textarea:focus]:text-primary dark:group-has-[textarea:focus]:text-primary-dark-DEFAULT",
    "group-has-[textarea:active]:text-primary dark:group-has-[textarea:active]:text-primary-dark-DEFAULT",
    "group-has-[.MTTextarea-leading]:left-[calc(theme(spacing.14)-4px)]",
    "group-[.MTTextarea-with-placeholder]:group-has-[textarea:not(:placeholder-shown)]:top-2 group-[.MTTextarea-with-placeholder]:group-has-[textarea:not(:placeholder-shown)]:text-xs",
    "group-[.MTTextarea-error]:text-error dark:group-[.MTTextarea-error]:text-e-error-dark-DEFAULT",
    "group-[.MTTextarea-disabled]:text-surface-text/[0.38] dark:group-[.MTTextarea-disabled]:text-surface-dark-text/[0.38]",
)


export const TextareaSupportTextClassName = twMerge(
    "MTTextarea-support-text",
    "px-4 mt-1",
    "text-xs font-normal",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "group-[.MTTextarea-error]:text-error dark:group-[.MTTextarea-error]:text-e-error-dark-DEFAULT",
    "group-[.MTTextarea-disabled]:text-surface-text/[0.38] dark:group-[.MTTextarea-disabled]:text-surface-dark-text/[0.38]"
)
