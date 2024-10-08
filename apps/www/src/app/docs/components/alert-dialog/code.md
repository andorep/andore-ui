```jsx:code.jsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogActionContent,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@andore-ui/alert-dialog";
import { Button } from "@andore-ui/button";

const Preview = () => {
  return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={"elevated"}>Open Modal</Button>
        </AlertDialogTrigger>
        <AlertDialogPortal>
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
            <AlertDialogActionContent>
              <AlertDialogCancel asChild>
                <Button variant={"text"}>Cancel</Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button variant={"text"} color={"error"}>
                  Delete account
                </Button>
              </AlertDialogAction>
            </AlertDialogActionContent>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
  );
};

export default Preview;
```
