import React, { PropsWithChildren } from "react";
import { Placement } from "@floating-ui/react";

export interface TooltipProps
  extends PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>> {
  title: string;
  placement?: Placement;
  offset?: number;
  delay?: number;
  delayOpen?: number;
  delayClose?: number;
  onOpenChange?: (open: boolean) => void;
}
