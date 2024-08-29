import React, { PropsWithChildren } from 'react';

export type TextareaVariant = 'filled' | 'outlined';

export interface TextareaProps extends PropsWithChildren<React.HTMLAttributes<HTMLTextAreaElement>> {
    label?: string;
    supportText?: string;
    variant?: TextareaVariant;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    readOnly?: boolean;
    error?: boolean;
}

