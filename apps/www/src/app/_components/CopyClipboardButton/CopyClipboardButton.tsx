"use client";

import React from "react";
import { IconButton } from "@andore-ui/icon-button/src";
import CopyAllIcon from "@/app/_components/icons/CopyAllIcon";
import { copyToClipboard } from "@/app/_utils/html.uitil";
import {Tooltip} from "@andore-ui/tooltip";

interface CopyClipboardButtonProps {
  text: string;
}

const CopyClipboardButton = (props: CopyClipboardButtonProps) => {
  const { text } = props;
  const [temporaryTooltipText, setTemporaryTooltipText] = React.useState<string | undefined>(undefined);
  const handleCopy = async () => {
    try {
      await copyToClipboard(text);
        setTemporaryTooltipText("Copied into clipboard 😉");
    } catch (error) {
      console.error(error);
    }
  };

  const handleTooltipClose = () => {
    setTemporaryTooltipText(undefined);
  };
  return (
    <Tooltip
      title={temporaryTooltipText || "Copy code"}
      placement={"top"}
      offset={15}
      delay={200}
      delayClose={0}
      onOpenChange={handleTooltipClose}
    >
      <IconButton
        color={"secondary"}
        onClick={handleCopy}
        aria-label={"Copy code"}
      >
        <CopyAllIcon className={"w-5 h-5"} />
      </IconButton>
    </Tooltip>
  );
};

export default CopyClipboardButton;
