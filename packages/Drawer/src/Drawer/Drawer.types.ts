import { PropsWithChildren } from "react";
import type { DialogProps } from "vaul";

interface Props {
  title: string;
  className?: string;
  description: string;
  direction?: "left" | "right";
}

export type DrawerProps = DialogProps & PropsWithChildren<Props>;
