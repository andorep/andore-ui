import React from "react";
import { Typography } from "@material-tailwind-ui/typography";
import CustomTheme from "@/app/(root)/themes/_components/CustomTheme/CustomTheme";
import { theme } from "@material-tailwind-ui/theme-plugin";
import CalendarView from "@/app/(root)/themes/_components/_blocks/CalendarView/CalendarView";
import TweetCard from "@/app/(root)/themes/_components/_blocks/TweetCard/TweetCard";
import MediaPlayer from "@/app/(root)/themes/_components/_blocks/MediaPlayer/MediaPlayer";
import DirectMessages from "@/app/(root)/themes/_components/_blocks/DirectMessages/DirectMessages";
import Settings from "@/app/(root)/themes/_components/_blocks/Settings/Settings";
import Chat from "@/app/(root)/themes/_components/_blocks/Chat/Chat";
import SignIn from "@/app/(root)/themes/_components/_blocks/SignIn/SignIn";
import BigStat from "@/app/(root)/themes/_components/_blocks/BigStat/BigStat";
import Tags from "@/app/(root)/themes/_components/_blocks/Tags/Tags";

const Main = () => {
  return (
    <section className="flex flex-col justify-between mx-auto container">
      <section className="title flex flex-col justify-between mb-9">
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
      <CustomTheme defaultTheme={theme} />
      <section id={"Blocks"} className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-4 auto-rows-max flex flex-col gap-4">
          <CalendarView />
          <SignIn />
        </div>
        <div className="col-span-5 row-span-2 flex flex-col gap-4">
          <MediaPlayer />
          <Tags />
          <TweetCard />
          <Settings />
        </div>
        <div className="col-span-3 row-span-2 flex flex-col gap-4">
          <BigStat />
          <DirectMessages />
          <Chat />
        </div>
      </section>
    </section>
  );
};

export default Main;
