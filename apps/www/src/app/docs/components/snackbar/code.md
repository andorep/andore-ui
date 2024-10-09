```jsx:code.jsx
import { Button } from "@andore-ui/button";
import { Snackbar, SnackbarDescription } from "@andore-ui/snackbar";

const Preview = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(true);
  return (
    <>
      <Button onClick={handleClick}>Show Snackbar</Button>
      <Snackbar open={open} onOpenChange={setOpen}>
        <SnackbarDescription>
          This is a description of the snackbar.
        </SnackbarDescription>
      </Snackbar>
    </>
  );
};

export default Preview;
```
