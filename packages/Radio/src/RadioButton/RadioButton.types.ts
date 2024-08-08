import {RadioGroupItemProps as RadixRadioButtonProps} from '@radix-ui/react-radio-group';

export type RadioButtonColor =
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error";

export type RadioButtonSize = "sm" | "md" | "lg";

export interface RadioButtonProps extends RadixRadioButtonProps {
    id: string;
    color?: RadioButtonColor;
    size?: RadioButtonSize;
}
