import React, { PropsWithChildren } from 'react';

export type SelectVariant = 'filled' | 'outlined';

export interface SelectProps extends PropsWithChildren<React.HTMLAttributes<HTMLSelectElement>> {
    label?: string;
    supportText?: string;
    variant?: SelectVariant;
    placeholder?: string;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    value?: string;
    defaultValue?: string;
    prefix?: string;
    suffix?: string;
    disabled?: boolean;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    readOnly?: boolean;
    error?: boolean;
}
