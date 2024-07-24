import type {Meta, StoryObj} from "@storybook/react";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogActionContent,
    AlertDialogContentSizes
} from "@material-tailwind-ui/alert-dialog";
import {Button} from "@material-tailwind-ui/button";

const sizeControl = {
    type: "select" as const,
    options: ["sm", "md", "lg"] as AlertDialogContentSizes[],
};

const meta: Meta<typeof AlertDialog> = {
    component: AlertDialog,
};
export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
    render: () => (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={"elevated"}>Open Modal</Button>
            </AlertDialogTrigger>
            <AlertDialogPortal>
                <AlertDialogOverlay/>
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
    ),
};

export const Sizes: Story = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render: ({size}) => (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={"elevated"}>Open Modal</Button>
            </AlertDialogTrigger>
            <AlertDialogPortal>
                <AlertDialogOverlay/>
                <AlertDialogContent size={size}>
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
    ),
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        size: "sm",
    },
    argTypes: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        size: sizeControl,
    },
};


export const WithIcon: Story = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render: ({size}) => {
        const icon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={'#db2777'}>
            <path
                d="M480-800q-33 0-56.5-23.5T400-880q0-33 23.5-56.5T480-960q33 0 56.5 23.5T560-880q0 33-23.5 56.5T480-800ZM360-200v-480q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-800l20 80q-56 15-118 25t-122 15v480h-80v-240h-80v240h-80ZM320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0Z"/>
        </svg>
        return (
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant={"elevated"}>Open Modal</Button>
                </AlertDialogTrigger>
                <AlertDialogPortal>
                    <AlertDialogOverlay/>
                    <AlertDialogContent size={size}>
                        <AlertDialogTitle icon={icon}>
                            Are you absolutely sure?
                        </AlertDialogTitle>
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
        )
    },
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        size: "sm",
    },
    argTypes: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        size: sizeControl,
    },
};
