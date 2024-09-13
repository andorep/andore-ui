'use client';
import React from 'react';
import {Chat} from "@/app/@chat/_data/chat.data";
import { List, ListItem, ListItemText } from "@material-tailwind-ui/list";
import { Avatar, AvatarFallback } from "@material-tailwind-ui/avatar";


interface ChatListProps {
    items: Chat[];
}

const ChatList = ({items}: ChatListProps) => {
    return (
      <List divider className={'bg-transparent'}>
        {items.map((item) => (
          <ListItem key={item.id} onClick={() => console.log(item)} className={'bg-transparent'}>
              <Avatar>
                  <AvatarFallback className={'text-sm'}>
                      {item.from.split(' ')[0].charAt(0)}{item.from.split(' ')[1].charAt(0)}
                  </AvatarFallback>
              </Avatar>
            <ListItemText supportingText={item.message}>
              {item.message}:
            </ListItemText>
            <span className={'text-secondary dark:text-secondary-dark-DEFAULT text-xs h-full flex items-start'}>{item.date}</span>
          </ListItem>
        ))}
      </List>
    );
};

export default ChatList;
