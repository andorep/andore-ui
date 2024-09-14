import React from "react";
import { fetchPhotos } from "@/app/@photos/_data/photos.data";
import PhotosTabList from "@/app/@photos/_components/PhotosTabList/PhotosTabList";

const PhotosMain = async () => {
  const photosList = await fetchPhotos();
  return (
    <div className="flex rounded-t w-full flex-grow overflow-auto bg-surface-container-lowest dark:bg-surface-dark-container-lowest">
      <PhotosTabList  items={photosList} />
    </div>
  );
};

export default PhotosMain;
