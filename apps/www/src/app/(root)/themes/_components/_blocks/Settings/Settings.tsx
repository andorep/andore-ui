import React from "react";
import Block from "@/app/(root)/themes/_components/_blocks/Block/Block";
import { List, ListItem, ListItemText } from "@material-tailwind-ui/list";
import { Button } from "@material-tailwind-ui/button";
import { Switch, SwitchThumb } from "@material-tailwind-ui/switch";

const Settings = () => {
  return (
    <Block
      title={"Settings"}
      subtitle={"Manage your preferences"}
      className={"lg:min-w-[400px]"}
    >
      <List>
        <ListItem className={"p-0"}>
          <ListItemText supportingText={"Enabled two-factor authentication"}>
            <span className={"font-medium"}>2FA</span>
          </ListItemText>
          <Switch>
            <SwitchThumb />
          </Switch>
        </ListItem>
        <ListItem className={"p-0"}>
          <ListItemText supportingText={"Receive notifications"}>
            <span className={"font-medium"}>Notifications</span>
          </ListItemText>
          <Switch>
            <SwitchThumb />
          </Switch>
        </ListItem>
      </List>
    </Block>
  );
};

export default Settings;
