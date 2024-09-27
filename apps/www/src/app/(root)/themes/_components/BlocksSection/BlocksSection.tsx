'use client';

import React from "react";
import { theme } from "@andore-ui/theme-plugin";
import CustomTheme from "@/app/(root)/themes/_components/CustomTheme/CustomTheme";

interface BlocksSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const BlocksSection = (props: BlocksSectionProps) => {
  const { children } = props;
  const ref = React.useRef(null);
  return (
    <>
      <CustomTheme defaultTheme={theme} blocksRef={ref} />
      <section
        ref={ref}
        id={"Blocks"}
        className="grid xl:max-2xl:grid-cols-3 2xl:grid-rows-4 2xl:grid-flow-col gap-4 mt-4 custom-theme"
      >
        {children}
      </section>
    </>
  );
};

export default BlocksSection;
