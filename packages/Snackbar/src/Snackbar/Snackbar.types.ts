import React from "react";
import { ToastProps as RadixSnackbarProps, ToastProviderProps } from '@radix-ui/react-toast';

export type SnackbarColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export interface SnackbarProps extends RadixSnackbarProps {
    duration?: ToastProviderProps['duration'];
    label?: ToastProviderProps['label'];
    swipeDirection?: ToastProviderProps['swipeDirection'];
    swipeThreshold?: ToastProviderProps['swipeThreshold'];
    actionText?: string;
    onAction?: (React.MouseEventHandler<HTMLButtonElement>);
    onClose?: (React.MouseEventHandler<HTMLButtonElement>);
    color?: SnackbarColor;
}
