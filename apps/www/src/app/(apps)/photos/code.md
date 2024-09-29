```typescript:PhotosApp.tsx

import React from "react";
import {
  NavigationDivider,
  NavigationHeadline,
  NavigationItem,
  NavigationList,
} from "@andore-ui/navigation";
import { IconButton } from "@andore-ui/icon-button";
import { Typography } from "@andore-ui/typography";
import { Avatar, AvatarImage } from "@andore-ui/avatar";
import { Search } from "@andore-ui/search";
import { Card, CardMedia } from "@andore-ui/card";

const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="currentColor"
    {...props}
  >
    <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
  </svg>
);

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      {...props}
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
};

const ImageIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill={"currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
    </svg>
  );
};

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      {...props}
    >
      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
    </svg>
  );
};

const GroupIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      {...props}
    >
      <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
    </svg>
  );
};

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      {...props}
    >
      <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
    </svg>
  );
};

const LockIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
    </svg>
  );
};

const ArchiveIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      {...props}
    >
      <path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z" />
    </svg>
  );
};

const items = [
  {
    id: "VoTXZurSDBk",
    title: "the ruins of the ancient city of palmyran",
    url: "https://images.unsplash.com/photo-1717539778198-b453ac88f2ba?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "fApLwDyPeFE",
    title: "A mountain covered in snow under a cloudy sky",
    url: "https://images.unsplash.com/photo-1726164023213-294bfe241ec7?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "3OVBtQj_A7A",
    title: "A view of a beach with a city in the background",
    url: "https://images.unsplash.com/photo-1725882393508-6652bd21b22c?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "a770WVskCmo",
    title:
      "A man standing next to a red helicopter on top of a snow covered mountain",
    url: "https://images.unsplash.com/photo-1726212859389-0d85b91951be?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "_YBE7iCqlZ8",
    title: "a man carrying a bicycle on a city street",
    url: "https://images.unsplash.com/photo-1718046254440-77bb25734514?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "Hc_-IE8CTmc",
    title: "a person standing on a beach with a surfboard",
    url: "https://images.unsplash.com/photo-1718125444572-940c6b965901?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "_c2O_GfQVDg",
    title: "an aerial view of a house with a grass roof",
    url: "https://images.unsplash.com/photo-1718125188885-7ce699512931?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "U0IczOlzLaY",
    title: "A couple of people standing next to a body of water",
    url: "https://images.unsplash.com/photo-1726103845887-a0e047efa86b?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "ySFsudO5qQQ",
    title: "A view of a city and a river at night",
    url: "https://images.unsplash.com/photo-1726125560955-d4b23fc18027?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "SueCu7_G-oc",
    title: "A man walking on a bridge with a city in the background",
    url: "https://images.unsplash.com/photo-1726108954014-71ffe50f8a26?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "nWhbnPbxR24",
    title: "A person standing on a surfboard in the ocean",
    url: "https://images.unsplash.com/photo-1726094051307-a55a8ea52314?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "QzXHv2S4-l0",
    title: "A black and white photo of a tree in the dark",
    url: "https://images.unsplash.com/photo-1726092707889-c4ef049d22df?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "JqFWB51h4S0",
    title: "man sitting on rock formation beside body of water",
    url: "https://images.unsplash.com/photo-1445288962990-fcb0ae08ec1d?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "HsqB3X2tiOA",
    title: "white castle",
    url: "https://images.unsplash.com/photo-1552418033-d68b553926d2?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
  {
    id: "dBtWLliLt5k",
    title: "concrete buildings beside white cruise ship",
    url: "https://images.unsplash.com/photo-1507840771025-26e8ececa04c?ixid=M3w2NTM2MzR8MHwxfHRvcGljfHxGem8zenVPSE42d3x8fHx8Mnx8MTcyNjMwMDQwNnw&ixlib=rb-4.0.3&w=421&h=284",
  },
];

const Photo = () => {
  return (
    <div
      className={
        "flex flex-row w-full h-full border border-outline-variant bg-surface-container-low dark:bg-surface-dark-DEFAULT rounded"
      }
    >
      <div className={"Navigation flex flex-col"}>
        <div className={"flex items-center gap-2 h-14 min-w-64 pl-3"}>
          <IconButton>
            <MenuIcon className={"h-6"} />
          </IconButton>
          <Typography variant={"title"} size={"sm"}>
            Photos
          </Typography>
        </div>
        <NavigationList>
          <NavigationItem active icon={<ImageIcon />} trailing={999}>
            Photos
          </NavigationItem>
          <NavigationItem icon={<SearchIcon />} trailing={99}>
            Explore
          </NavigationItem>
          <NavigationItem icon={<GroupIcon />} trailing={9}>
            Share with me
          </NavigationItem>
          <NavigationDivider />
          <NavigationHeadline>Library</NavigationHeadline>
          <NavigationItem icon={<StarIcon />}>Favorites</NavigationItem>
          <NavigationItem icon={<LockIcon />}>Private Folder</NavigationItem>
          <NavigationItem icon={<ArchiveIcon />}>Archive</NavigationItem>
        </NavigationList>
      </div>
      <div className={"Main flex flex-col flex-1 h-auto px-3 xl:pl-0"}>
        <div
          className={"header flex flex-row w-full min-h-14 h-14 items-center"}
        >
          <div
            className={"flex flex-1 md:flex-none items-center gap-2 h-14 pr-3"}
          >
            <IconButton>
              <MenuIcon className={"h-6"} />
            </IconButton>
            <Typography variant={"title"} size={"sm"}>
              Photos
            </Typography>
          </div>
          <div className={"hidden md:block  flex-1"}>
            <Search
              placeholder={"Search photos..."}
              className={"h-10  max-w-[720px]"}
            />
          </div>
          <div className={"flex flex-row gap-2"}>
            <IconButton className={"w-10 h-11"}>
              <SettingsIcon className={"h-6 w-6"} />
            </IconButton>
            <Avatar>
              <AvatarImage src={"./3d_avatar_13.png"} alt="Image of Colm Tuite" />
            </Avatar>
          </div>
        </div>
        <div className="flex rounded-t w-full flex-grow overflow-auto bg-surface-container-lowest dark:bg-surface-dark-container-lowest">
          <section className={"overflow-auto flex-1 flex-col"}>
            <div className={"flex flex-row flex-wrap gap-4 p-4 justify-center"}>
              {items.map((item) => (
                <Card key={item.id} className={"w-full sm:w-80"}>
                  <CardMedia
                    disabledGutters
                    src={item.url}
                    alt={item.title}
                    className={"object-cover h-full w-full"}
                  />
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Photo;

```
