import React from "react";
import { Surface, SurfaceProps } from "@andore-ui/surface";
import { twMerge } from "tailwind-merge";
import { Typography } from "@andore-ui/typography";
import CopyClipboardButton from "@/app/_components/CopyClipboardButton/CopyClipboardButton";

interface BlockProps extends SurfaceProps {
  title?: string;
  subtitle?: string;
  copyText?: string;
}

const Block = (props: BlockProps) => {
  const { title, subtitle, children, className, copyText, ...rest } = props;

  const classes = twMerge(
    "CalenderView flex flex-col w-full max-w-full p-2 h-full relative",
    className,
  );

  return (
    <Surface variant={"outlined"} className={classes} elevation={0} {...rest}>
      <span className={"absolute right-1 top-1"}>
        {copyText && <CopyClipboardButton text={copyText} />}
      </span>
      {title && (
        <div className="flex flex-col mb-4">
          <Typography variant={"title"} size={"sm"} className={"mb -4"}>
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant={"body"}
              size={"md"}
              className={"text-secondary dark:text-secondary-dark-DEFAULT"}
            >
              {subtitle}
            </Typography>
          )}
        </div>
      )}
      {children}
    </Surface>
  );
};

export default Block;
