"use client";

import React from "react";
import { IconButton } from "@andore-ui/icon-button/src";
import CopyAllIcon from "@/app/_components/icons/CopyAllIcon";

interface CopyClipboardButtonProps {
  text: string;
}

const CopyClipboardButton = (props: CopyClipboardButtonProps) => {
  const { text } = props;
  const handleCopy = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text).catch((err) => {
        console.error("Unable to copy", err);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
      textArea.style.opacity = "0"; // Make it invisible.
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Unable to copy", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <IconButton color={"secondary"} onClick={handleCopy} aria-label={"Copy code"}>
      <CopyAllIcon className={"w-5 h-5"} />
    </IconButton>
  );
};

export default CopyClipboardButton;
