import {twMerge} from "tailwind-merge";

export const SwitchThumbClassName = twMerge(
    "MTSwitchThumb-root group/thumb",
    "box-content flex items-center justify-center rounded-full",
    "w-10 h-10",
    "transition-[inherit] duration-[inherit] ease-[inherit]",
    "-translate-x-2 -translate-y-1.5",
    "will-change-transform data-[state=checked]:translate-x-4",
    "group-hover:bg-outline/[0.07] dark:group-hover:bg-outline-dark/[0.07]",
    "group-active:bg-outline/[0.15] dark:group-active:bg-outline-dark/[0.15]",
    "data-[state=checked]:group-hover:bg-primary/[0.07] dark:data-[state=checked]:group-hover:bg-primary-dark-DEFAULT/[0.07]",
    "data-[state=checked]:group-active:bg-primary/[0.15] dark:data-[state=checked]:group-active:bg-primary-dark-DEFAULT/[0.15]",
    "data-[state=unchecked]:group-active:-translate-x-1.5 data-[state=checked]:group-active:translate-x-4.5",
    "has-[.MTSwitchThumb-icon]:-translate-x-1",
);


export const SwitchThumbDisabledClassName = twMerge(
    "data-[disabled]:group-hover:bg-transparent dark:data-[disabled]:group-hover:bg-transparent",
    "data-[disabled]:group-active:bg-transparent dark:data-[disabled]:group-active:bg-transparent",
    "data-[disabled]:data-[state=checked]:group-hover:bg-transparent dark:data-[disabled]:data-[state=checked]:group-hover:bg-transparent",
    "data-[disabled]:data-[state=checked]:group-active:bg-transparent dark:data-[disabled]:data-[state=checked]:group-active:bg-transparent",
    "data-[disabled]:group-active:data-[state=checked]:bg-transparent dark:data-[disabled]:group-active:data-[state=checked]:bg-transparent",
    "data-[disabled]:data-[state=unchecked]:group-active:-translate-x-2 data-[disabled]:data-[state=checked]:group-active:translate-x-4",
    "data-[disabled]:data-[state=unchecked]:has-[.MTSwitchThumb-icon]:-translate-x-1 data-[disabled]:data-[state=unchecked]:has-[.MTSwitchThumb-icon]:group-active:-translate-x-1",
);

export const SwitchThumbBaseClassName = twMerge(
    SwitchThumbClassName,
    SwitchThumbDisabledClassName,
);

export const SwitchThumbContentClassName = twMerge(
    "MTSwitchThumb-content",
    "flex items-center justify-center w-4 h-4 rounded-full",
    "transition-[inherit] duration-[inherit] ease-[inherit]",
    "shadow-sm dark:shadow-dark-sm",
    "bg-outline dark:bg-outline-dark",
    "group-data-[state=checked]/thumb:bg-primary-text dark:group-data-[state=checked]/thumb:bg-primary-dark-text",
    "group-data-[state=checked]/thumb:w-6 group-data-[state=checked]/thumb:h-6",
    "group-active:w-7 group-active:h-7",
    "group-active:group-data-[state=checked]/thumb:w-7 group-active:group-data-[state=checked]/thumb:h-7",
    "has-[.MTSwitchThumb-icon]:w-6 has-[.MTSwitchThumb-icon]:h-6",
);
export const SwitchThumbContentDisabledClassName = twMerge(
    "group-data-[disabled]:group-active:w-4 group-data-[disabled]:group-active:h-4",
    "group-data-[disabled]:has-[.MTSwitchThumb-icon]:group-active:w-6 group-data-[disabled]:has-[.MTSwitchThumb-icon]:h-6",
    "group-data-[disabled]:group-active:group-data-[state=checked]/thumb:w-6 group-data-[disabled]:group-active:group-data-[state=checked]/thumb:h-6",
);

export const SwitchThumbContentBaseClassName = twMerge(
    SwitchThumbContentClassName,
    SwitchThumbContentDisabledClassName,
);


export const SwitchThumbIconBaseClassName = twMerge(
    "MTSwitchThumb-icon",
    "block w-4 h-4",
);

export const SwitchThumbIconCheckedBaseClassName = twMerge(
    SwitchThumbIconBaseClassName,
    "MTSwitchThumb-icon-checked",
    "group-data-[state=unchecked]/thumb:hidden",
    "text-primary-container-text dark:text-primary-dark-container-text",
);

export const SwitchThumbIconUncheckedBaseClassName = twMerge(
    SwitchThumbIconBaseClassName,
    "MTSwitchThumb-icon-unchecked",
    "group-data-[state=checked]/thumb:hidden",
    "text-surface-container-highest dark:text-surface-dark-container-highest",
);
