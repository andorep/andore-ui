import { PropsWithChildren } from "react";
import type { DialogProps } from "vaul";

export interface Props {
    className?: string;
}

export type BottomSheetProps = DialogProps & PropsWithChildren<Props>;
