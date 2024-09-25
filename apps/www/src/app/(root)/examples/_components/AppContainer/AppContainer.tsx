"use client";

import React from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
} from "@andore-ui/toggle-button";
import PreviewIcon from "@/app/_components/icons/PreviewIcon";
import CodeIcon from "@/app/_components/icons/CodeIcon";

interface AppContainerProps {
  name?: string;
  code?: React.ReactNode;
}

const AppContainer = (props: AppContainerProps) => {
  const { name, code } = props;
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
      {selected == 0 && (
        <iframe className={`w-full h-[600px] rounded`} src={`./${name}`} />
      )}
      {selected == 1 && (
          <div className={'code-block h-[600px] flex flex-col'}>
            {code}
          </div>
      )}
    </section>
  );
};

export default AppContainer;
