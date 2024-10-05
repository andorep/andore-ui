import React from "react";
import Block from "@/app/themes/_components/_blocks/Block/Block";
import { fetchPhotos } from "@/app/@photos/_data/photos.data";
import PhotosList from "@/app/themes/_components/PhotoList/PhotoList";
import { Fab } from "@andore-ui/fab";
import path from "node:path";
import fs from "node:fs";


const readCopyFile = async () => {
    const filePath = path.join(process.cwd(), 'src/app/themes/_components/_blocks/FloatingFab', "copy.txt");
    const fileContent = fs.readFileSync(filePath, "utf8");
    return fileContent;
};

const FloatingFab =  async () => {
    const copyText = await readCopyFile();
  const photosList = await fetchPhotos();
  const list = photosList.slice(0, 6);
  return (
    <Block className={" relative"} copyText={copyText}>
      <PhotosList items={list} />
      <Fab className={'absolute'} floating={'right'} icon={(
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="currentColor">
            <path
                d="M480-480ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320v80H200v560h560v-320h80v320q0 33-23.5 56.5T760-120H200Zm40-160h480L570-480 450-320l-90-120-120 160Zm440-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
          </svg>
      )}>
        Add Photo
      </Fab>
    </Block>
  );
};

export default FloatingFab;
