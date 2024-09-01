import {twMerge} from "tailwind-merge";

export const SelectBaseWithPlaceholderClassName = twMerge(
    "MTSelect-with-placeholder",
)

export const SelectBaseErrorClassName = twMerge(
    "MTSelect-error",
)

export const SelectBaseClassName = twMerge(
    "MTSelect-root group",
    "transition-all duration-short4 ease-emphasized",
    "flex flex-col relative w-full",
)

export const SelectFilledBaseClassName = twMerge(
    "MTSelect-filled",
    "rounded-sm rounded-b-none",
)

export const SelectOutlinedBaseClassName = twMerge(
    "MTSelect-outlined",
    "rounded-sm",
    "bg-transparent",
)

export const SelectBaseDisabledClassName = twMerge(
    "MTSelect-disabled",
    "pointer-events-none",
)

// Large
// "text-lg leading-[24px] tracking-[0.5px]",
// small
//     "text-sm leading-[18px] tracking-[0.4px]",

export const SelectInputRootClassName = twMerge(
    "MTSelect-input-root group/inputRoot",
    "flex items-center relative",
    "transition-colors duration-short2 ease-standard",
    "rounded-sm",
    "h-14",
    "border-box",
    "text-base font-normal",
    "outline-none border-none bg-transparent",
    "text-surface-text dark:text-surface-dark-text",
)

export const SelectInputRootFilledClassName = twMerge(
    "MTSelect-input-filled",
    "transition-colors duration-short2 ease-standard",
    "rounded-b-none",
    "bg-surface-container-highest dark:bg-surface-dark-container-highest",
    "border-b border-solid border-surface-text-variant dark:border-surface-dark-text-variant",
    "has-[select:focus]:border-primary dark:has-[select:focus]:border-primary-dark-DEFAULT",
    "has-[select:active]:border-primary dark:has-[select:active]:border-primary-dark-DEFAULT",
    "has-[select:focus]:border-b-4 has-[select:active]:border-b-4",
    "group-[.MTSelect-error]:border-error dark:group-[.MTSelect-error]:border-e-error-dark-DEFAULT",
    "group-[.MTSelect-disabled]:bg-surface-text/[0.04] dark:group-[.MTSelect-disabled]:bg-surface-dark-text/[0.04]",
    "group-[.MTSelect-disabled]:border-surface-text/[0.38] dark:group-[.MTSelect-disabled]:border-surface-dark-text/[0.38]"
)

export const SelectInputRootOutlinedClassName = twMerge(
    "MTSelect-input-outlined",
    "transition-colors duration-short2 ease-standard",
    "border border-solid",
    "border-outline dark:border-outline-dark",
    "hover:border-surface-text dark:hover:border-surface-dark-text",
    "has-[select:focus]:border-2 has-[select:active]:border-2",
    "group-[.MTSelect-error]:border-error dark:group-[.MTSelect-error]:border-e-error-dark-DEFAULT",
    "group-[.MTSelect-disabled]:border-surface-text/[0.12] dark:group-[.MTSelect-disabled]:border-surface-dark-text/[0.12]"
)

export const SelectInputStateClassName = twMerge(
    "MTSelect-input-state",
    "transition-colors duration-short2 ease-standard",
    "flex flex-1 h-full items-center",
)

export const SelectInputStateFilledClassName = twMerge(
    "MTSelect-input-state-filled",
    "hover:bg-surface-text/[0.08] dark:hover:bg-surface-dark-text/[0.08]",
)

export const SelectInputStateOutlinedClassName = twMerge(
    "MTSelect-input-state-outlined",
)

export const SelectInputClassName = twMerge(
    "MTSelect-input",
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
    "group-[.MTSelect-disabled]:text-surface-text/[0.38] dark:group-[.MTSelect-disabled]:text-surface-dark-text/[0.38]",
    "group-[.MTSelect-disabled]:placeholder-surface-text/[0.38] dark:group-[.MTSelect-disabled]:placeholder-surface-dark-text/[0.38]",
)

const SelectInputFilledNormalPaddingClassName = twMerge(
    "h-[inherit] px-4",
    "peer-[]/label:pt-3 focus:peer-[]/label:pt-4 active:peer-[]/label:pt-4",
)

export const SelectInputFilledClassName = twMerge(
    "MTSelect-input-filled",
    SelectInputFilledNormalPaddingClassName,
    "focus:pt-1 active:pt-1",
    "group-has-[.MTSelect-prefix]:pl-0"
)


export const SelectInputOutlinedClassName = twMerge(
    "MTSelect-input-outlined",
    SelectInputFilledNormalPaddingClassName,
    "focus:peer-[]/label:pt-3 active:peer-[]/label:pt-3",
    "focus:pl-[calc(theme(spacing.4)-1px)] active:pl-[calc(theme(spacing.4)-1px)]",
    "group-has-[.MTSelect-prefix]:pl-0"
)

export const SelectLabelClassName = twMerge(
    "MTSelect-label",
    "transition-all duration-short4 ease-emphasized",
    "peer/label",
    "pointer-events-none",
    "absolute top-4 left-5",
    "text-base font-normal",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "group-has-[select:focus]:top-2 group-has-[select:focus]:text-xs",
    "group-has-[select:active]:top-2 group-has-[select:active]:text-xs",
    "group-has-[select:focus]:text-primary dark:group-has-[select:focus]:text-primary-dark-DEFAULT",
    "group-has-[select:active]:text-primary dark:group-has-[select:active]:text-primary-dark-DEFAULT",
    "group-[.MTSelect-with-placeholder]:group-has-[select:not(:placeholder-shown)]:top-2 group-[.MTSelect-with-placeholder]:group-has-[select:not(:placeholder-shown)]:text-xs",
    "group-[.MTSelect-error]:text-error dark:group-[.MTSelect-error]:text-e-error-dark-DEFAULT",
    "group-[.MTSelect-disabled]:text-surface-text/[0.38] dark:group-[.MTSelect-disabled]:text-surface-dark-text/[0.38]",
)

export const SelectLabelFilledClassName = twMerge(
    "MTSelect-label-filled",
)

export const SelectLabelOutlinedClassName = twMerge(
    "MTSelect-label-outlined",
)

export const SelectTrailingClassName = twMerge(
    "MTSelect-trailing",
    "flex items-center justify-center",
    "w-6 h-6",
    "mr-3",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "fill-surface-text-variant dark:fill-surface-dark-text-variant",
    "group-[.MTSelect-disabled]:text-surface-text/[0.38] dark:group-[.MTSelect-disabled]:text-surface-dark-text/[0.38]",
    "group-[.MTSelect-disabled]:fill-surface-text/[0.38] dark:group-[.MTSelect-disabled]:fill-surface-dark-text/[0.38]",
)

export const SelectTrailingFilledClassName = twMerge(
    "MTSelect-trailing-filled",
    "group-has-[select:focus]:pt-1 group-has-[select:active]:pt-1",
)

export const SelectTrailingOutlinedClassName = twMerge(
    "MTSelect-trailing-outlined",
    "group-has-[select:focus]:mr-[calc(theme(spacing.3)-1px)]  group-has-[select:active]:mr-[calc(theme(spacing.3)-1px)]",
)

export const SelectSupportTextClassName = twMerge(
    "MTSelect-support-text",
    "px-4 mt-1",
    "text-xs font-normal",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "group-[.MTSelect-error]:text-error dark:group-[.MTSelect-error]:text-e-error-dark-DEFAULT",
    "group-[.MTSelect-disabled]:text-surface-text/[0.38] dark:group-[.MTSelect-disabled]:text-surface-dark-text/[0.38]"
)
