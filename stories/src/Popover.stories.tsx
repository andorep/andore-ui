import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import {Popover, PopoverHeader, PopoverContent, PopoverActions, Placement} from "@material-tailwind-ui/popover";
import {Button} from "@material-tailwind-ui/button";
import {Typography} from "@material-tailwind-ui/typography";
// @ts-ignore
import DogSrc from '../assets/husky.jpg';

const placementControl = {
    control: 'select' as const,
    options: ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'] as Placement[],
};

const meta: Meta<typeof Popover> = {
    component: Popover,
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    render: () => {
        const [anchorEl, setAnchorEl] = React.useState<HTMLElement | undefined>();

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        }

        const handleClose = () => {
            setAnchorEl(undefined);
        }
        return (
            <>
                <Button onClick={handleClick}>
                    Hey kid, wanna see a popover?
                </Button>
                <Popover open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl}>
                    <PopoverHeader>Here's the popover!</PopoverHeader>
                    <PopoverContent>
                        This is the content of the popover. It can contain anything you want, like text, images, or
                        even a form!
                    </PopoverContent>
                    <PopoverActions>
                        <Button onClick={handleClose} variant={'text'}>
                            Learn more
                        </Button>
                    </PopoverActions>
                </Popover>
            </>
        )
    }
};

export const WithPlacement: Story = {
    render: ({placement}) => {
        const [anchorEl, setAnchorEl] = React.useState<HTMLElement | undefined>();

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        }

        const handleClose = () => {
            setAnchorEl(undefined);
        }
        return (
            <div className={'w-full h-full flex items-center justify-center'}>
                <Button onClick={handleClick}>
                    Hey kid, wanna see a popover?
                </Button>
                <Popover open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl} placement={placement}>
                    <PopoverHeader>Here's the popover!</PopoverHeader>
                    <PopoverContent>
                        This is the content of the popover. It can contain anything you want, like text, images, or
                        even a form!
                    </PopoverContent>
                    <PopoverActions>
                        <Button onClick={handleClose} variant={'text'}>
                            Learn more
                        </Button>
                    </PopoverActions>
                </Popover>
            </div>
        )
    },
    args: {
        placement: 'top',
    },
    argTypes: {
        placement: placementControl,
    }
};

export const Custom: Story = {
    render: () => {
        const [anchorEl, setAnchorEl] = React.useState<HTMLElement | undefined>();

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        }

        const handleClose = () => {
            setAnchorEl(undefined);
        }
        return (
            <div className={'max-w-[700px]'}>
                <Typography variant={'headline'} size={'sm'}>An amazing blog post</Typography>
                <Typography variant={'body'} size={'lg'} className={'mt-4'}>
                    Let's say you have a blog post that you want to share with your friends. And you talk about dogs here
                    and you want to show them a picture of a <span className={'underline'} onMouseOver={handleClick} onMouseLeave={handleClose}>cute dog</span>
                </Typography>
                <Popover open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl} disableGutters>
                    <img src={DogSrc} alt={'Cute Dog'}/>
                </Popover>
            </div>
        )
    }
};

