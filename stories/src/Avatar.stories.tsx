import type {Meta, StoryObj} from "@storybook/react";
import {Avatar, AvatarImage, AvatarFallback} from "@material-tailwind-ui/avatar";

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
                    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                    alt="Colm Tuite"
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
