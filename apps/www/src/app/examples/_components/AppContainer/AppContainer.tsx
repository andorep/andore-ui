"use client";

import React from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
} from "@andore-ui/toggle-button";
import PreviewIcon from "@/app/_components/icons/PreviewIcon";
import CodeIcon from "@/app/_components/icons/CodeIcon";

interface AppContainerProps {
  code?: React.ReactNode;
  app?: React.ReactNode;
}

const AppContainer = (props: AppContainerProps) => {
  const { code, app } = props;
  const [selected, setSelected] = React.useState(0);
  return (
    <section className="flex flex-col gap-4">
      <ToggleButtonGroup density={-2}>
        <ToggleButton
          startIcon={<PreviewIcon className={"w-4 h-4"} />}
          selected={selected == 0}
          onClick={() => setSelected(0)}
        >
          Preview
        </ToggleButton>
        <ToggleButton
          startIcon={<CodeIcon className={"w-4 h-4"} />}
          selected={selected == 1}
          onClick={() => setSelected(1)}
        >
          Code
        </ToggleButton>
      </ToggleButtonGroup>
      {selected == 0 && <div className={"w-full h-[600px] rounded"}>{app}</div>}
      {selected == 1 && (
        <div className={"code-block h-[600px] flex flex-col"}>{code}</div>
      )}
    </section>
  );
};

export default AppContainer;
