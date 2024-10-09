```jsx:code.jsx
import {
  Dialog,
  DialogClose,
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@andore-ui/dialog";
import { Button } from "@andore-ui/button";
import { TextField } from "@andore-ui/text-field";

const Preview = () => {
  return (
      <Dialog>
          <DialogTrigger asChild>
              <Button variant={'filled'}>
                  Edit profile
              </Button>
          </DialogTrigger>
          <DialogPortal>
              <DialogOverlay />
              <DialogContent>
                  <DialogTitle>
                      Edit profile
                  </DialogTitle>
                  <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                  <fieldset className="mb-[15px] flex items-center gap-5">
                      <TextField id="name" defaultValue="Pedro Duarte" label="Name" />
                  </fieldset>
                  <fieldset className="mb-[15px] flex items-center gap-5">
                      <TextField id="username" defaultValue="@peduarte" label="Username" />
                  </fieldset>
                  <div className="mt-[25px] flex justify-end">
                      <DialogClose asChild>
                          <Button variant={'filled'}>
                              Save
                          </Button>
                      </DialogClose>
                  </div>
                  <DialogCloseButton>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                      </svg>
                  </DialogCloseButton>
              </DialogContent>
          </DialogPortal>
      </Dialog>
  );
};

export default Preview;
```
