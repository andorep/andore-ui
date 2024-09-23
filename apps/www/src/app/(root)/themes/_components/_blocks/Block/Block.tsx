import React from "react";
import { Surface, SurfaceProps } from "@material-tailwind-ui/surface";
import { twMerge } from "tailwind-merge";
import { Typography } from "@material-tailwind-ui/typography";

interface BlockProps extends SurfaceProps {
  title?: string;
  subtitle?: string;
}

const Block = (props: BlockProps) => {
  const { title, subtitle, children, className, ...rest } = props;

  const classes = twMerge(
      "CalenderView flex flex-col min-w-full lg:min-w-96 p-2",
       className
  );

  return (
    <Surface variant={"outlined"} className={classes} elevation={0} {...rest}>
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
