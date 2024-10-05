import React from "react";
import { MiddlewareData } from "@floating-ui/react";
import { twMerge } from "tailwind-merge";

interface FloatingPointerProps extends React.HTMLAttributes<HTMLDivElement> {
  style: React.CSSProperties;
  arrowRef: React.RefObject<HTMLDivElement>;
  middlewareData: MiddlewareData;
  placement?: "top" | "right" | "bottom" | "left";
}

interface ArrowStyle {
  position?: "absolute";
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

const arrowLineClasses = twMerge(
  "h-[1px] w-4 bg-outline dark:bg-outline-dark",
  "data-[placement=left]:-right-4 data-[placement=right]:-left-4",
);

const arrowCircleClasses = twMerge(
  "flex items-center justify-center",
  "h-4 w-4 top-[calc(theme(spacing.4)-4px)]",
  "border border-outline dark:border-outline-dark rounded-full",
  "data-[placement=left]:-right-6 data-[placement=right]:-left-6",
);

const containerClasses = twMerge(
  "rounded-full",
  "hidden sm:block",
  "bg-surface-container-high dark:bg-surface-dark-container-high",
  "text-surface-text dark:text-surface-dark-text",
);

const FloatingPointer = React.forwardRef<HTMLDivElement, FloatingPointerProps>(
  (props, ref) => {
    const { children, style, arrowRef, middlewareData, placement } = props;

    const arrowStyle = {
      position: "absolute",
      top: middlewareData.arrow?.y,
      left: middlewareData.arrow?.x,
    } as ArrowStyle;

    if (placement === "left") {
      arrowStyle.left = undefined;
      arrowStyle.right = middlewareData.arrow?.x;
    }

    const arrowCircleStyle = {
      ...arrowStyle,
      top: undefined,
    };

    return (
      <div ref={ref} style={style} className={containerClasses}>
        {children}
        <div
          data-placement={placement}
          ref={arrowRef}
          style={arrowStyle}
          className={arrowLineClasses}
        />
        <span
          data-placement={placement}
          style={arrowCircleStyle}
          className={arrowCircleClasses}
        >
          <span className="w-1 h-1 bg-outline dark:bg-outline-dark rounded-full block"></span>
        </span>
      </div>
    );
  },
);

FloatingPointer.displayName = "FloatingPointer";

export default FloatingPointer;
