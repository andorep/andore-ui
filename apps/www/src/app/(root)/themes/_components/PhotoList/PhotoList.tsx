'use client';
import {Photos} from "@/app/@photos/_data/photos.data";
import { Card, CardMedia } from "@andore-ui/card";


interface PhotosListProps {
    items: Photos[];
}

const PhotosList = ({ items }: PhotosListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.id} className={"w-full"}>
          <CardMedia
            disabledGutters
            src={item.url}
            alt={item.title}
            className={"object-cover h-full w-full"}
          />
        </Card>
      ))}
    </div>
  );
};

export default PhotosList;
