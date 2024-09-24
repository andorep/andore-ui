import React from "react";
import Block from "@/app/(root)/themes/_components/_blocks/Block/Block";
import { Chip } from "@material-tailwind-ui/chip";

const Tags = () => {
  return (
    <Block
      title={"People also searched for"}
    >
      <div className="columns-2 gap-1 mb-1">
        <Chip variant={"outlined"} className={"w-full"}>
          React
        </Chip>
        <Chip variant={"outlined"} className={"w-full"}>
          Design systems
        </Chip>
      </div>
      <div className="columns-3 gap-1 mb-1">
        <Chip variant={"outlined"} className={"w-full"}>
          Material Design
        </Chip>
        <Chip variant={"outlined"} className={"w-full"} selected selectedIconDisabled>
          andore/ui
        </Chip>
        <Chip variant={"outlined"} className={"w-full"}>
          Material Tailwind
        </Chip>
      </div>
      <div className="columns-2 gap-1">
        <Chip variant={"outlined"}  className={'w-full'}>Tailwind CSS</Chip>
        <Chip variant={"outlined"}  className={'w-full'}>Next.js</Chip>
      </div>
    </Block>
  );
};

export default Tags;