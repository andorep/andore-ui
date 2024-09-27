import React from "react";
import { Typography } from "@andore-ui/typography";
import CalendarView from "@/app/(root)/themes/_components/_blocks/CalendarView/CalendarView";
import TweetCard from "@/app/(root)/themes/_components/_blocks/TweetCard/TweetCard";
import MediaPlayer from "@/app/(root)/themes/_components/_blocks/MediaPlayer/MediaPlayer";
import DirectMessages from "@/app/(root)/themes/_components/_blocks/DirectMessages/DirectMessages";
import Settings from "@/app/(root)/themes/_components/_blocks/Settings/Settings";
import Chat from "@/app/(root)/themes/_components/_blocks/Chat/Chat";
import SignIn from "@/app/(root)/themes/_components/_blocks/SignIn/SignIn";
import BigStat from "@/app/(root)/themes/_components/_blocks/BigStat/BigStat";
import Tags from "@/app/(root)/themes/_components/_blocks/Tags/Tags";
import FloatingFab from "@/app/(root)/themes/_components/_blocks/FloatingFab/FloatingFab";
import BlocksSection from "@/app/(root)/themes/_components/BlocksSection/BlocksSection";

const Main = () => {
  return (
    <section className="flex flex-col justify-between mx-auto container">
      <section className="title flex flex-col justify-between mb-3 md:mb-9">
        <span className={"flex items-center gap-1 mb-3"}>
          <Typography
            variant={"headline"}
            className={"text-slate-950 text-3xl sm:text-5xl"}
            size={"md"}
          >
            Shape Your Experience
          </Typography>
        </span>
        <Typography
          variant={"title"}
          className={"text-slate-950 font-normal -mt-3 text-lg sm:text-2xl"}
          size={"md"}
        >
          Add your own personal touch to your application
        </Typography>
      </section>
      <BlocksSection>
        <div className="2xl:row-span-1">
          <CalendarView />
        </div>
        <div className="xl:max-2xl:col-span-2 2xl:hidden">
          <MediaPlayer />
        </div>
        <div className="2xl:row-span-2">
          <SignIn />
        </div>
        <div className="xl:max-2xl:col-span-2 grid grid-rows-2 gap-4 2xl:hidden">
          <Tags />
          <TweetCard />
        </div>
        <div className="hidden 2xl:block 2xl:row-span-1">
          <Settings />
        </div>
        <div className="hidden 2xl:block 2xl:row-span-1">
          <MediaPlayer />
        </div>
        <div className="hidden 2xl:block 2xl:row-span-1">
          <Tags />
        </div>
        <div className="hidden 2xl:block 2xl:row-span-1">
          <TweetCard />
        </div>
        <div className="hidden 2xl:block 2xl:row-span-1">
          <FloatingFab />
        </div>
        <div className="hidden 2xl:block 2xl:row-span-1">
          <BigStat />
        </div>
        <div className="xl:max-2xl:col-span-3 2xl:hidden grid grid-cols-subgrid gap-4">
          <div className="col-span-1">
            <BigStat />
          </div>
          <div className="col-span-2">
            <Chat />
          </div>
        </div>
        <div className="hidden 2xl:block 2xl:row-span-2">
          <Chat />
        </div>
        <div className="hidden 2xl:block 2xl:row-span-1">
          <DirectMessages />
        </div>
        <div className="col-span-1 2xl:hidden">
          <DirectMessages />
        </div>
        <div className="xl:max-2xl:col-span-2 2xl:hidden">
          <FloatingFab />
        </div>
      </BlocksSection>
    </section>
  );
};

export default Main;
