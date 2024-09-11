'use client';
import React from 'react';
import {Mail} from "@/app/@mail/_data/mail.data";
import {List, ListItem, ListItemText} from "@material-tailwind-ui/list";


interface MailListProps {
    items: Mail[];
}

const MailList = ({items}: MailListProps) => {
    return (
      <List divider>
        {items.map((item) => (
          <ListItem key={item.id} onClick={() => console.log(item)}>
            <span className={"w-52 text-surface-text dark:text-surface-dark-text"}>{item.from}</span>
            <ListItemText className={'flex-row'}>
              {item.subject}:
                &nbsp;
              <span className={"text-secondary dark:text-secondary-dark-DEFAULT"}>
                {item.message}
              </span>
            </ListItemText>
            <span className={'text-secondary dark:text-secondary-dark-DEFAULT text-xs'}>{item.date}</span>
          </ListItem>
        ))}
      </List>
    );
};

export default MailList;
