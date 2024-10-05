import React from "react";
import Block from "@/app/themes/_components/_blocks/Block/Block";
import { Chip } from "@andore-ui/chip";
import path from "node:path";
import fs from "node:fs";

const readCopyFile = async () => {
  const filePath = path.join(
    process.cwd(),
    "src/app/themes/_components/_blocks/Tags",
    "copy.txt",
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
};

const Tags = async () => {
  const copyText = await readCopyFile();
  return (
    <Block title={"People also searched for"} copyText={copyText}>
      <div className="columns-2 gap-1 mb-1">
        <Chip variant={"outlined"} className={"w-full"}>
          React
        </Chip>
        <Chip variant={"outlined"} className={"w-full"}>
          Design systems
        </Chip>
      </div>
      <div className="columns-3 gap-1 mb-1">
        <Chip
          variant={"outlined"}
          className={
            "w-[114px] leading-[31px] md:leading-[inherit] md:w-full *:overflow-ellipsis *:overflow-hidden *:whitespace-nowrap *:inline-block"
          }
        >
          Material Design
        </Chip>
        <Chip
          variant={"outlined"}
          className={"w-full"}
          selected
          selectedIconDisabled
        >
          andore/ui
        </Chip>
        <Chip
          variant={"outlined"}
          className={
            "w-[114px] leading-[31px] md:leading-[inherit] md:w-full *:overflow-ellipsis *:overflow-hidden *:whitespace-nowrap *:inline-block"
          }
        >
          Material Tailwind
        </Chip>
      </div>
      <div className="columns-2 gap-1">
        <Chip variant={"outlined"} className={"w-full"}>
          Tailwind CSS
        </Chip>
        <Chip variant={"outlined"} className={"w-full"}>
          Next.js
        </Chip>
      </div>
    </Block>
  );
};

export default Tags;
