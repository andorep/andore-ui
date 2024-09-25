'use client';
import {Photos} from "@/app/@photos/_data/photos.data";
import { Card, CardMedia } from "@andore-ui/card";


interface PhotosListProps {
    items: Photos[];
}

const PhotosList = ({items}: PhotosListProps) => {
    return (
        <div className={"flex flex-row flex-wrap gap-4 p-4 justify-center"}>
            {items.map((item) => (
                <Card key={item.id} className={'w-full sm:w-80'}>
                    <CardMedia disabledGutters src={item.url} alt={item.title} className={'object-cover h-full w-full'} />
                </Card>
            ))}
        </div>
    );
};

export default PhotosList;
