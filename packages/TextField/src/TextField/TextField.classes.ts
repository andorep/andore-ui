import {twMerge} from "tailwind-merge";

export const TextFieldBaseWithPlaceholderClassName = twMerge(
    "MTTextField-with-placeholder",
)

export const TextFieldBaseClassName = twMerge(
    "MTTextField-root group",
    "transition-all duration-short4 ease-emphasized",
    "flex flex-col relative w-full",
)

export const TextFieldFilledBaseClassName = twMerge(
    "MTTextField-filled",
    "rounded-sm rounded-b-none",
)

export const TextFieldOutlinedBaseClassName = twMerge(
    "MTTextField-outlined",
    "rounded-sm",
    "bg-transparent",
)

export const TextFieldBaseDisabledClassName = twMerge(
    "MTTextField-disabled",
    "pointer-events-none",
)

// Large
// "text-lg leading-[24px] tracking-[0.5px]",
// small
//     "text-sm leading-[18px] tracking-[0.4px]",

export const TextFieldInputRootClassName = twMerge(
    "MTTextField-input-root group/inputRoot",
    "flex items-center relative",
    "transition-colors duration-short2 ease-standard",
    "rounded-sm",
    "h-14",
    "border-box",
    "text-base font-normal",
    "outline-none border-none bg-transparent",
    "text-surface-text dark:text-surface-dark-text",
)

export const TextFieldInputRootFilledClassName = twMerge(
    "MTTextField-input-filled",
    "transition-colors duration-short2 ease-standard",
    "rounded-b-none",
    "bg-surface-container-highest dark:bg-surface-dark-container-highest",
    "border-b border-solid border-surface-text-variant dark:border-surface-dark-text-variant",
    "has-[input:focus]:border-primary dark:has-[input:focus]:border-primary-dark-DEFAULT",
    "has-[input:active]:border-primary dark:has-[input:active]:border-primary-dark-DEFAULT",
    "has-[input:focus]:border-b-4 has-[input:active]:border-b-4",
    "group-[.MTTextField-disabled]:bg-surface-text/[0.04] dark:group-[.MTTextField-disabled]:bg-surface-dark-text/[0.04]",
    "group-[.MTTextField-disabled]:border-surface-text/[0.38] dark:group-[.MTTextField-disabled]:border-surface-dark-text/[0.38]"
)

export const TextFieldInputRootOutlinedClassName = twMerge(
    "MTTextField-input-outlined",
    "transition-colors duration-short2 ease-standard",
    "border border-solid",
    "border-outline dark:border-outline-dark",
    "hover:border-surface-text dark:hover:border-surface-dark-text",
    "has-[input:focus]:border-2 has-[input:active]:border-2",
    "group-[.MTTextField-disabled]:border-surface-text/[0.12] dark:group-[.MTTextField-disabled]:border-surface-dark-text/[0.12]"
)

export const TextFieldInputStateClassName = twMerge(
    "MTTextField-input-state",
    "transition-colors duration-short2 ease-standard",
    "flex flex-1 h-full items-center",
)

export const TextFieldInputStateFilledClassName = twMerge(
    "MTTextField-input-state-filled",
    "hover:bg-surface-text/[0.08] dark:hover:bg-surface-dark-text/[0.08]",
)

export const TextFieldInputStateOutlinedClassName = twMerge(
    "MTTextField-input-state-outlined",
)

export const TextFieldInputClassName = twMerge(
    "MTTextField-input",
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
    "group-[.MTTextField-disabled]:text-surface-text/[0.38] dark:group-[.MTTextField-disabled]:text-surface-dark-text/[0.38]",
    "group-[.MTTextField-disabled]:placeholder-surface-text/[0.38] dark:group-[.MTTextField-disabled]:placeholder-surface-dark-text/[0.38]",
)

const TextFieldInputFilledNormalPaddingClassName = twMerge(
    "h-[inherit] px-4",
    "peer-[]/label:pt-3 focus:peer-[]/label:pt-4 active:peer-[]/label:pt-4",
)

export const TextFieldInputFilledClassName = twMerge(
    "MTTextField-input-filled",
    TextFieldInputFilledNormalPaddingClassName,
    "focus:pt-1 active:pt-1",
    "group-has-[.MTTextField-prefix]:pl-0"
)


export const TextFieldInputOutlinedClassName = twMerge(
    "MTTextField-input-outlined",
    TextFieldInputFilledNormalPaddingClassName,
    "focus:peer-[]/label:pt-3 active:peer-[]/label:pt-3",
    "focus:pl-[calc(theme(spacing.4)-1px)] active:pl-[calc(theme(spacing.4)-1px)]",
    "group-has-[.MTTextField-prefix]:pl-0"
)

export const TextFieldLabelClassName = twMerge(
    "MTTextField-label",
    "transition-all duration-short4 ease-emphasized",
    "peer/label",
    "pointer-events-none",
    "absolute top-4 left-4",
    "text-base font-normal",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "group-has-[input:focus]:top-2 group-has-[input:focus]:text-xs",
    "group-has-[input:active]:top-2 group-has-[input:active]:text-xs",
    "group-has-[input:focus]:text-primary dark:group-has-[input:focus]:text-primary-dark-DEFAULT",
    "group-has-[input:active]:text-primary dark:group-has-[input:active]:text-primary-dark-DEFAULT",
    "group-has-[.MTTextField-leading]:left-[calc(theme(spacing.14)-4px)]",
    "group-[.MTTextField-with-placeholder]:group-has-[input:not(:placeholder-shown)]:top-2 group-[.MTTextField-with-placeholder]:group-has-[input:not(:placeholder-shown)]:text-xs",
    "group-[.MTTextField-disabled]:text-surface-text/[0.38] dark:group-[.MTTextField-disabled]:text-surface-dark-text/[0.38]",
)

export const TextFieldLeadingClassName = twMerge(
    "MTTextField-leading",
    "flex items-center justify-center",
    "w-6 h-6",
    "ml-3",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "fill-surface-text-variant dark:fill-surface-dark-text-variant",
    "group-[.MTTextField-disabled]:text-surface-text/[0.38] dark:group-[.MTTextField-disabled]:text-surface-dark-text/[0.38]",
    "group-[.MTTextField-disabled]:fill-surface-text/[0.38] dark:group-[.MTTextField-disabled]:fill-surface-dark-text/[0.38]",
)

export const TextFieldLeadingFilledClassName = twMerge(
    "MTTextField-leading-filled",
    "group-has-[input:focus]:pt-1 group-has-[input:active]:pt-1",
)

export const TextFieldLeadingOutlinedClassName = twMerge(
    "MTTextField-leading-outlined",
    "group-has-[input:focus]:ml-[calc(theme(spacing.3)-1px)]  group-has-[input:active]:ml-[calc(theme(spacing.3)-1px)]",
)

export const TextFieldTrailingClassName = twMerge(
    "MTTextField-trailing",
    "flex items-center justify-center",
    "w-6 h-6",
    "mr-3",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "fill-surface-text-variant dark:fill-surface-dark-text-variant",
    "group-[.MTTextField-disabled]:text-surface-text/[0.38] dark:group-[.MTTextField-disabled]:text-surface-dark-text/[0.38]",
    "group-[.MTTextField-disabled]:fill-surface-text/[0.38] dark:group-[.MTTextField-disabled]:fill-surface-dark-text/[0.38]",
)

export const TextFieldTrailingFilledClassName = twMerge(
    "MTTextField-trailing-filled",
    "group-has-[input:focus]:pt-1 group-has-[input:active]:pt-1",
)

export const TextFieldTrailingOutlinedClassName = twMerge(
    "MTTextField-trailing-outlined",
    "group-has-[input:focus]:mr-[calc(theme(spacing.3)-1px)]  group-has-[input:active]:mr-[calc(theme(spacing.3)-1px)]",
)

export const TextFieldPrefixClassName = twMerge(
    "MTTextField-prefix",
    "text-base font-normal",
    "group-[.MTTextField-disabled]:text-surface-text/[0.38] dark:group-[.MTTextField-disabled]:text-surface-dark-text/[0.38]",
)

export const TextFieldPrefixFilledClassName = twMerge(
    "MTTextField-prefix-filled",
    "transition-opacity duration-short4 ease-standard",
    "opacity-0",
    TextFieldInputFilledNormalPaddingClassName,
    "flex items-center justify-center",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "pr-0.5",
    "group-has-[input:focus]:pl-4 group-has-[input:active]:pl-4",
    "group-has-[input:focus]:pt-4 group-has-[input:active]:pt-4",
    "group-has-[input:focus]:opacity-100 group-has-[input:active]:opacity-100",
    "group-[.MTTextField-with-placeholder]:group-has-[input:not(:placeholder-shown)]:opacity-100",
)

export const TextFieldPrefixOutlinedClassName = twMerge(
    "MTTextField-prefix-outlined",
    "transition-opacity duration-short4 ease-standard",
    "opacity-0",
    TextFieldInputFilledNormalPaddingClassName,
    "flex items-center justify-center",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "pr-0.5",
    "group-has-[input:focus]:pt-4 group-has-[input:active]:pt-4",
    "group-has-[input:focus]:opacity-100 group-has-[input:active]:opacity-100",
    "group-[.MTTextField-with-placeholder]:group-has-[input:not(:placeholder-shown)]:opacity-100",
)

export const TextFieldSuffixClassName = twMerge(
    "MTTextField-suffix",
    "text-base font-normal",
    "group-[.MTTextField-disabled]:text-surface-text/[0.38] dark:group-[.MTTextField-disabled]:text-surface-dark-text/[0.38]",
)

export const TextFieldSuffixFilledClassName = twMerge(
    "MTTextField-suffix-filled",
    "transition-opacity duration-short4 ease-standard",
    "opacity-0",
    TextFieldInputFilledNormalPaddingClassName,
    "flex items-center justify-center",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "pl-0.5",
    "group-has-[input:focus]:pt-4 group-has-[input:active]:pt-4",
    "group-has-[input:focus]:opacity-100 group-has-[input:active]:opacity-100",
    "group-[.MTTextField-with-placeholder]:group-has-[input:not(:placeholder-shown)]:opacity-100",
)

export const TextFieldSuffixOutlinedClassName = twMerge(
    "MTTextField-suffix-outlined",
    "transition-opacity duration-short4 ease-standard",
    "opacity-0",
    TextFieldInputFilledNormalPaddingClassName,
    "flex items-center justify-center",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "pl-0.5",
    "group-has-[input:focus]:pt-4 group-has-[input:active]:pt-4",
    "group-has-[input:focus]:opacity-100 group-has-[input:active]:opacity-100",
    "group-[.MTTextField-with-placeholder]:group-has-[input:not(:placeholder-shown)]:opacity-100",
)

export const TextFieldSupportTextClassName = twMerge(
    "MTTextField-support-text",
    "px-4 mt-1",
    "text-xs font-normal",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "group-[.MTTextField-disabled]:text-surface-text/[0.38] dark:group-[.MTTextField-disabled]:text-surface-dark-text/[0.38]"
)
