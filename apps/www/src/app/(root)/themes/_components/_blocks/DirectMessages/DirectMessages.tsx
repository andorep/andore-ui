import React from "react";
import Block from "@/app/(root)/themes/_components/_blocks/Block/Block";
import { List, ListItemText } from "@andore-ui/list";
import { Avatar, AvatarImage } from "@andore-ui/avatar";
import path from "node:path";
import fs from "node:fs";
import DirectMessageItem from "@/app/(root)/themes/_components/_blocks/DirectMessages/DirectMessageItem";

const readCopyFile = async () => {
  const filePath = path.join(
    process.cwd(),
    "src/app/(root)/themes/_components/_blocks/DirectMessages",
    "copy.txt",
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
};

const DirectMessages = async () => {
  const copyText = await readCopyFile();
  return (
    <Block
      title={"Direct Messages"}
      subtitle={"3 new messages"}
      copyText={copyText}
    >
      <List className={"-ml-2"}>
        <DirectMessageItem>
          <Avatar className={"w-6 h-6"}>
            <AvatarImage src={"./3d_avatar_14.png"} alt="Colm Tuite" />
          </Avatar>
          <ListItemText>Colm Tuite</ListItemText>
          <span className="bg-error dark:bg-error-dark text-white text-xs font-semibold w-2 h-2 rounded-full ml-auto" />
        </DirectMessageItem>
        <DirectMessageItem>
          <Avatar className={"w-6 h-6"}>
            <AvatarImage src={"./3d_avatar_30.png"} alt="Colm Tuite" />
          </Avatar>
          <ListItemText>Liam McNally</ListItemText>
          <span className="bg-error dark:bg-error-dark text-white text-xs font-semibold w-2 h-2 rounded-full ml-auto" />
        </DirectMessageItem>
        <DirectMessageItem>
          <Avatar className={"w-6 h-6"}>
            <AvatarImage src={"./3d_avatar_6.png"} alt="Colm Tuite" />
          </Avatar>
          <ListItemText>John Doe</ListItemText>
          <span className="bg-error dark:bg-error-dark text-white text-xs font-semibold w-2 h-2 rounded-full ml-auto" />
        </DirectMessageItem>
        <DirectMessageItem>
          <Avatar className={"w-6 h-6"}>
            <AvatarImage src={"./3d_avatar_10.png"} alt="Colm Tuite" />
          </Avatar>
          <ListItemText>Jane Doe</ListItemText>
        </DirectMessageItem>
        <DirectMessageItem>
          <Avatar className={"w-6 h-6"}>
            <AvatarImage src={"./3d_avatar_13.png"} alt="Colm Tuite" />
          </Avatar>
          <ListItemText>John Smith</ListItemText>
        </DirectMessageItem>
      </List>
    </Block>
  );
};

export default DirectMessages;
