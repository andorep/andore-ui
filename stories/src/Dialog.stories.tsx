import type { Meta, StoryObj } from "@storybook/react";
import {
    Dialog,
    DialogTrigger,
    DialogPortal,
    DialogOverlay,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose,
    DialogCloseButton,
} from "@material-tailwind-ui/dialog";
import {Button} from "@material-tailwind-ui/button";
import {Label} from "@material-tailwind-ui/label";
import {Input} from "@material-tailwind-ui/input";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <>
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'filled'}>
                    Edit profile
                </Button>
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay/>
                <DialogContent>
                    <DialogTitle>
                        Edit profile
                    </DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <Label htmlFor="name">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                        />
                    </fieldset>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <Label htmlFor="username">
                            Username
                        </Label>
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                        />
                    </fieldset>
                    <div className="mt-[25px] flex justify-end">
                        <DialogClose asChild>
                            <Button variant={'filled'}>
                                Save
                            </Button>
                        </DialogClose>
                    </div>
                    <DialogCloseButton>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                             fill="currentColor">
                            <path
                                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>
                    </DialogCloseButton>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    </>
  ),
};
