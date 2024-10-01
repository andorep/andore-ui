import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import {
    Snackbar,
    SnackbarDescription,
    SnackbarManager,
    SnackbarTitle,
} from "@andore-ui/snackbar";
import {Button} from "@andore-ui/button";
import {useSnackbar} from "@andore-ui/snackbar";

const meta: Meta<typeof Snackbar> = {
    component: Snackbar,
};
export default meta;

type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
    render: () => {
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
    },
};

export const WithAction: Story = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        const handleClick = () => setOpen(true);
        return (
            <>
                <Button onClick={handleClick}>Show Snackbar</Button>
                <Snackbar open={open} onOpenChange={setOpen} actionText="Action">
                    <SnackbarDescription>
                        This is a description of the snackbar.
                    </SnackbarDescription>
                </Snackbar>
            </>
        );
    },
};


export const WithClose: Story = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        const handleClick = () => setOpen(true);
        return (
            <>
                <Button onClick={handleClick}>Show Snackbar</Button>
                <Snackbar open={open} onOpenChange={setOpen} onClose={() => setOpen(false)} actionText="Action">
                    <SnackbarDescription>
                        This is a description of the snackbar.
                    </SnackbarDescription>
                </Snackbar>
            </>
        );
    },
};

export const WithTitle: Story = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        const handleClick = () => setOpen(true);
        return (
            <>
                <Button onClick={handleClick}>Show Snackbar</Button>
                <Snackbar open={open} onOpenChange={setOpen}>
                    <SnackbarTitle>Title</SnackbarTitle>
                    <SnackbarDescription>
                        This is a description of the snackbar.
                    </SnackbarDescription>
                </Snackbar>
            </>
        );
    },
};

export const snackbarManager: Story = {
    render: () => {
        const ButtonTrigger = () => {
            const {showSnackbar} = useSnackbar();
            return (
                <Button
                    onClick={() =>
                        showSnackbar({
                            title: "Snackbar Title",
                            description: "This is a description of the snackbar.",
                        })
                    }
                >
                    Show Snackbar
                </Button>
            );
        };
        return (
            <SnackbarManager onlyOne>
                <ButtonTrigger/>
            </SnackbarManager>
        );
    },
};
