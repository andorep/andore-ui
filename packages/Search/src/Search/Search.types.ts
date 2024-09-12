import React, { PropsWithChildren } from 'react';

export type SearchVariant = 'filled' | 'outlined';

export type SearchSize = 'sm' | 'md' | 'lg';

export interface SearchProps extends PropsWithChildren<React.HTMLAttributes<HTMLInputElement>> {
    variant?: SearchVariant;
    placeholder?: string;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    size?: SearchSize;
}
