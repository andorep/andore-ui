import React from "react";
import PhotosHeader from "@/app/@photos/_components/PhotosHeader/PhotosHeader";
import PhotosNavigation from "@/app/@photos/_components/PhotosNavigation/PhotosNavigation";
import PhotosMain from "@/app/@photos/_components/PhotosMain/PhotosMain";

const Photos = () => {
    // get size of the window
    return (
        <section className="App h-[600px] flex flex-row  mx-auto container xl:px-0 lg:px-2">
            <div className={"flex flex-row w-full h-full border border-outline-variant bg-surface-container-low dark:bg-surface-dark-DEFAULT rounded"}>
                <PhotosNavigation />
                <div className={"Main flex flex-col flex-1 h-auto px-3 xl:pl-0"}>
                    <PhotosHeader />
                    <PhotosMain />
                </div>
            </div>
        </section>
    );
};

export default Photos;
