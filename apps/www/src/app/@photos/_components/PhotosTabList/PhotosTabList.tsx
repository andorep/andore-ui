"use client";
import React from "react";
import PhotosList from "@/app/@photos/_components/PhotosList/PhotosList";
import { Photos } from "@/app/@photos/_data/photos.data";

interface PhotosTabListProps {
  items: Photos[];
}

const PhotosTabList = ({ items }: PhotosTabListProps) => {
  return (
    <section className={"overflow-auto flex-1 flex-col"}>
      <PhotosList items={items} />
    </section>
  );
};

export default PhotosTabList;
