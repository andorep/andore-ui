import {twMerge} from "tailwind-merge";

export const SearchBaseWithPlaceholderClassName = twMerge(
    "MTSearch-with-placeholder",
)

export const SearchBaseErrorClassName = twMerge(
    "MTSearch-error",
)

export const SearchBaseSizeClassNameMap = {
    "sm": twMerge(
        "MTSearch-sm",
    ),
    "md": twMerge(
        "MTSearch-md",
    ),
    "lg": twMerge(
        "MTSearch-lg",
    ),
}

export const SearchBaseClassName = twMerge(
    "MTSearch-root group",
    "transition-all duration-short4 ease-emphasized",
    "flex flex-col relative w-full",
)

export const SearchFilledBaseClassName = twMerge(
    "MTSearch-filled",
    "rounded-full",
)

export const SearchOutlinedBaseClassName = twMerge(
    "MTSearch-outlined",
    "rounded-full",
    "bg-transparent",
)

export const SearchBaseDisabledClassName = twMerge(
    "MTSearch-disabled",
    "pointer-events-none",
)

export const SearchInputRootClassName = twMerge(
    "MTSearch-input-root group/inputRoot",
    "flex items-center relative",
    "transition-colors duration-short2 ease-standard",
    "rounded-[inherit]",
    "h-14",
    "border-box",
    "text-base font-normal",
    "outline-none border-none bg-transparent",
    "text-surface-text dark:text-surface-dark-text",
    "group-[.MTSearch-sm]:h-10",
    "group-[.MTSearch-lg]:h-16",
)

export const SearchInputRootFilledClassName = twMerge(
    "MTSearch-input-filled",
    "transition-colors duration-short2 ease-standard",
    "bg-surface-container-highest dark:bg-surface-dark-container-highest",
    "group-[.MTSearch-disabled]:bg-surface-text/[0.04] dark:group-[.MTSearch-disabled]:bg-surface-dark-text/[0.04]",
)

export const SearchInputRootOutlinedClassName = twMerge(
    "MTSearch-input-outlined",
    "transition-colors duration-short2 ease-standard",
    "border border-solid",
    "border-outline dark:border-outline-dark",
    "hover:border-surface-text dark:hover:border-surface-dark-text",
    "has-[input:focus]:border-2 has-[input:active]:border-2",
    "group-[.MTSearch-error]:border-error dark:group-[.MTSearch-error]:border-e-error-dark-DEFAULT",
    "group-[.MTSearch-disabled]:border-surface-text/[0.12] dark:group-[.MTSearch-disabled]:border-surface-dark-text/[0.12]"
)

export const SearchInputStateClassName = twMerge(
    "MTSearch-input-state",
    "transition-colors duration-short2 ease-standard",
    "flex flex-1 h-full items-center",
    "rounded-[inherit]",
)

export const SearchInputStateFilledClassName = twMerge(
    "MTSearch-input-state-filled",
    "hover:bg-surface-text/[0.08] dark:hover:bg-surface-dark-text/[0.08]",
)

export const SearchInputStateOutlinedClassName = twMerge(
    "MTSearch-input-state-outlined",
)

export const SearchInputClassName = twMerge(
    "MTSearch-input",
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
    "group-[.MTSearch-disabled]:text-surface-text/[0.38] dark:group-[.MTSearch-disabled]:text-surface-dark-text/[0.38]",
    "group-[.MTSearch-disabled]:placeholder-surface-text/[0.38] dark:group-[.MTSearch-disabled]:placeholder-surface-dark-text/[0.38]",
)

const SearchInputFilledNormalPaddingClassName = twMerge(
    "h-[inherit] px-4",
    "peer-[]/label:pt-3",
)

export const SearchInputFilledClassName = twMerge(
    "MTSearch-input-filled",
    SearchInputFilledNormalPaddingClassName,
    "group-has-[.MTSearch-prefix]:pl-0"
)


export const SearchInputOutlinedClassName = twMerge(
    "MTSearch-input-outlined",
    SearchInputFilledNormalPaddingClassName,
    "focus:peer-[]/label:pt-3 active:peer-[]/label:pt-3",
    "focus:pl-[calc(theme(spacing.4)-1px)] active:pl-[calc(theme(spacing.4)-1px)]",
    "group-has-[.MTSearch-prefix]:pl-0"
)

export const SearchLeadingClassName = twMerge(
    "MTSearch-leading",
    "flex items-center justify-center",
    "w-6 h-6",
    "ml-3",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "fill-surface-text-variant dark:fill-surface-dark-text-variant",
    "group-[.MTSearch-disabled]:text-surface-text/[0.38] dark:group-[.MTSearch-disabled]:text-surface-dark-text/[0.38]",
    "group-[.MTSearch-disabled]:fill-surface-text/[0.38] dark:group-[.MTSearch-disabled]:fill-surface-dark-text/[0.38]",
)

export const SearchLeadingFilledClassName = twMerge(
    "MTSearch-leading-filled",
    "group-has-[input:focus]:pt-1 group-has-[input:active]:pt-1",
)

export const SearchLeadingOutlinedClassName = twMerge(
    "MTSearch-leading-outlined",
    "group-has-[input:focus]:ml-[calc(theme(spacing.3)-1px)]  group-has-[input:active]:ml-[calc(theme(spacing.3)-1px)]",
)

export const SearchTrailingClassName = twMerge(
    "MTSearch-trailing",
    "flex items-center justify-center",
    "w-6 h-6",
    "mr-3",
    "text-surface-text-variant dark:text-surface-dark-text-variant",
    "fill-surface-text-variant dark:fill-surface-dark-text-variant",
    "group-[.MTSearch-disabled]:text-surface-text/[0.38] dark:group-[.MTSearch-disabled]:text-surface-dark-text/[0.38]",
    "group-[.MTSearch-disabled]:fill-surface-text/[0.38] dark:group-[.MTSearch-disabled]:fill-surface-dark-text/[0.38]",
)

export const SearchTrailingFilledClassName = twMerge(
    "MTSearch-trailing-filled",
    "group-has-[input:focus]:pt-1 group-has-[input:active]:pt-1",
)

export const SearchTrailingOutlinedClassName = twMerge(
    "MTSearch-trailing-outlined",
    "group-has-[input:focus]:mr-[calc(theme(spacing.3)-1px)]  group-has-[input:active]:mr-[calc(theme(spacing.3)-1px)]",
)
