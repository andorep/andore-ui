import React from "react";
import Block from "@/app/themes/_components/_blocks/Block/Block";
import { List, ListItem, ListItemText } from "@andore-ui/list";
import { Switch, SwitchThumb } from "@andore-ui/switch";
import path from "node:path";
import fs from "node:fs";


const readCopyFile = async () => {
  const filePath = path.join(process.cwd(), 'src/app/themes/_components/_blocks/Settings', "copy.txt");
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
};

const Settings = async () => {
  const copyText = await readCopyFile();
  return (
    <Block
      title={"Settings"}
      subtitle={"Manage your preferences"}
      className={"lg:min-w-[400px]"}
      copyText={copyText}>
      <List>
        <ListItem className={"p-0"}>
          <ListItemText supportingText={"Enabled two-factor authentication"}>
            <span className={"font-medium"}>2FA</span>
          </ListItemText>
          <Switch aria-label={"2FA switch"}>
            <SwitchThumb />
          </Switch>
        </ListItem>
        <ListItem className={"p-0"}>
          <ListItemText supportingText={"Receive notifications"}>
            <span className={"font-medium"}>Notifications</span>
          </ListItemText>
          <Switch aria-label={"Notifications switch"}>
            <SwitchThumb />
          </Switch>
        </ListItem>
      </List>
    </Block>
  );
};

export default Settings;
