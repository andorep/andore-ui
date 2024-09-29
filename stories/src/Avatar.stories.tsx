import type {Meta, StoryObj} from "@storybook/react";
import {Avatar, AvatarImage, AvatarFallback} from "@andore-ui/avatar";
// @ts-ignore
import AvatarSrc from '../assets/3d_avatar_13.png';

const meta: Meta<typeof Avatar> = {
    component: Avatar,
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    render: () => (
        <>
            <Avatar>
                <AvatarImage
                    src={AvatarSrc}
                    alt="Image of Colm Tuite"
                />
            </Avatar>
        </>
    ),
};

export const FallBack: Story = {
    render: () => (
        <>
            <Avatar>
                <AvatarFallback>CT</AvatarFallback>
            </Avatar>
        </>
    ),
};
