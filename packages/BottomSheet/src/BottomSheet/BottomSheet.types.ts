import { PropsWithChildren } from "react";
import type { DialogProps } from "vaul";

export interface Props {
  title: string;
  className?: string;
  hideTitle?: boolean;
  description: string;
  hideDescription?: boolean;
}

export type BottomSheetProps = DialogProps & PropsWithChildren<Props>;
