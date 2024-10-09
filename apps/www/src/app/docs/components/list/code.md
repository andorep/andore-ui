```jsx:code.jsx
import { List, ListItem, ListItemText } from "@andore-ui/list";

const Preview = () => {
  return (
    <div
      className={
        "w-80 p-4 bg-surface-container-lowest dark:bg-surface-dark-container-lowest rounded"
      }
    >
      <List divider>
        <ListItem onClick={() => {}}>
          <ListItemText supportingText={"Supporting text"}>
            Headline
          </ListItemText>
          D
        </ListItem>
        <ListItem onClick={() => {}}>
          <ListItemText supportingText={"Supporting text"}>
            Headline
          </ListItemText>
          D
        </ListItem>
        <ListItem onClick={() => {}}>
          <ListItemText supportingText={"Supporting text"}>
            Headline
          </ListItemText>
          D
        </ListItem>
      </List>
    </div>
  );
};

export default Preview;
```
