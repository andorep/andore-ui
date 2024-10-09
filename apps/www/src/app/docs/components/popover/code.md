```jsx:code.jsx
import { Button } from "@andore-ui/button";
import {
  Popover,
  PopoverActions,
  PopoverContent,
  PopoverHeader,
} from "@andore-ui/popover";

const Preview = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | undefined>();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(undefined);
  };
  return (
    <>
      <Button onClick={handleClick}>Hey kid, wanna see a popover?</Button>
      <Popover
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorEl={anchorEl}
      >
        <PopoverHeader>Here&#39;s the popover!</PopoverHeader>
        <PopoverContent>
          This is the content of the popover. It can contain anything you want,
          like text, images, or even a form!
        </PopoverContent>
        <PopoverActions>
          <Button onClick={handleClose} variant={"text"}>
            Learn more
          </Button>
        </PopoverActions>
      </Popover>
    </>
  );
};

export default Preview;
```
