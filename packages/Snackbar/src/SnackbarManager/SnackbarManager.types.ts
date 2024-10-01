import { PropsWithChildren } from 'react';
import {ToastProviderProps} from "@radix-ui/react-toast";

export interface SnackbarManagerProps extends PropsWithChildren<ToastProviderProps> {
    onlyOne?: boolean;
}
