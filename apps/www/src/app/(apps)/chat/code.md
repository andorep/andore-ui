```typescript:ChatApp.tsx
import React from "react";
import {
  NavigationDivider,
  NavigationHeadline,
  NavigationItem,
  NavigationList,
} from "@andore-ui/navigation";
import { IconButton } from "@andore-ui/icon-button";
import { Typography } from "@andore-ui/typography";
import { Fab } from "@andore-ui/fab";
import { Avatar, AvatarFallback, AvatarImage } from "@andore-ui/avatar";
import { Search } from "@andore-ui/search";
import { List, ListItem, ListItemText } from "@andore-ui/list";
import { ToggleButton } from "@andore-ui/toggle-button";


const MarkChatUnread = () => {
    return (
        <svg  fill={'currentColor'} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path
                d="M80-80v-720q0-33 23.5-56.5T160-880h404q-4 20-4 40t4 40H160v525l46-45h594v-324q23-5 43-13.5t37-22.5v360q0 33-23.5 56.5T800-240H240L80-80Zm80-720v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
        </svg>
    );
};

const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" {...props}>
        <path
            d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
    </svg>
);

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" {...props}>
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
    );
};

const HomeIcon = () => {
  return (
    <svg  fill={'currentColor'} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
    </svg>
  );
};

const AlternateEmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
    </svg>
  );
};

const KeepIcon = () => {
    return (
        <svg  fill={'currentColor'} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" >
            <path
                d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z"/>
        </svg>
    );
};

const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg fill={'currentColor'} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  {...props}>
            <path
                d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
        </svg>
    );
};

const items =[
  {
    "id": "1",
    "from": "Ila Roth" ,
    "message": "Hey, how are you?",
    "date": "2022-01-01"
  },
  {
    "id": "2",
    "from": "Merle Shah",
    "message": "I'm good, how are you?",
    "date": "2022-01-02"
  },
  {
    "id": "3",
    "from": "Johanna Benjamin",
    "message": "I'm good too, thanks for asking.",
    "date": "2022-01-03"
  }
]

const Chat = () => {
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
          Chat
        </Typography>
      </div>
      <div className={"flex pl-3 mt-2 mb-5"}>
        <Fab icon={<ChatIcon />}>New chat</Fab>
      </div>
      <NavigationList condensed>
        <NavigationItem active icon={<HomeIcon />} trailing={999}>
          Home
        </NavigationItem>
        <NavigationItem icon={<AlternateEmailIcon />} trailing={99}>
          Mentions
        </NavigationItem>
        <NavigationItem icon={<KeepIcon />} trailing={9}>
          Pinned
        </NavigationItem>
        <NavigationDivider />
        <NavigationHeadline>Messages</NavigationHeadline>
        <NavigationItem
          icon={
            <Avatar>
              <AvatarFallback className={"text-xs"}>IR</AvatarFallback>
            </Avatar>
          }
        >
          Ila Roth
        </NavigationItem>
        <NavigationItem
          icon={
            <Avatar>
              <AvatarFallback className={"text-xs"}>MS</AvatarFallback>
            </Avatar>
          }
        >
          Merle Shah
        </NavigationItem>
        <NavigationItem
          icon={
            <Avatar>
              <AvatarFallback className={"text-xs"}>JB</AvatarFallback>
            </Avatar>
          }
        >
          Johanna Benjamin
        </NavigationItem>
      </NavigationList>
    </div>
      <div className={"Main flex flex-col flex-1 h-auto px-3 xl:pl-0"}>
          <div className={"header flex flex-row w-full min-h-14 h-14 items-center"}>
              <div
                  className={"flex flex-1 md:flex-none items-center gap-2 h-14 pr-3"}
              >
                  <IconButton>
                      <MenuIcon className={"h-6"}/>
                  </IconButton>
                  <Typography variant={"title"} size={"sm"}>
                      Chat
                  </Typography>
              </div>
              <div className={"hidden md:block  flex-1"}>
                  <Search
                      placeholder={"Search chat..."}
                      className={"h-10  max-w-[720px]"}
                  />
              </div>
              <div className={"flex flex-row gap-2"}>
                  <IconButton>
                      <SettingsIcon className={"h-6 w-6"}/>
                  </IconButton>
                  <Avatar>
                      <AvatarImage src={"./3d_avatar_13.png"} alt="Colm Tuite"/>
                  </Avatar>
              </div>
          </div>

        <div className="flex rounded-t w-full flex-grow overflow-auto bg-surface-container-lowest dark:bg-surface-dark-container-lowest">
            <section className={"overflow-auto flex-1 flex-col"}>
              <div className={"flex flex-row justify-between items-center p-4"}>
                <Typography variant={"title"} size={"sm"}>
                  Home
                </Typography>
                <div className={' group/root MTToggleButtonGroup-density-2'}>
                  <ToggleButton
                      startIcon={<MarkChatUnread />}
                  >
                    Unread
                  </ToggleButton>
                </div>
              </div>
              <List divider className={'bg-transparent'}>
                {items.map((item) => (
                  <ListItem key={item.id} onClick={() => console.log(item)} className={'bg-transparent'}>
                      <Avatar>
                          <AvatarFallback className={'text-sm'}>
                              {item.from.split(' ')[0].charAt(0)}{item.from.split(' ')[1].charAt(0)}
                          </AvatarFallback>
                      </Avatar>
                    <ListItemText supportingText={item.message}>
                      {item.from}:
                    </ListItemText>
                    <span className={'text-secondary dark:text-secondary-dark-DEFAULT text-xs h-full flex items-start'}>{item.date}</span>
                  </ListItem>
                ))}
              </List>
            </section>
        </div>
      </div>
    </div>
  );
};

export default Chat;


```
