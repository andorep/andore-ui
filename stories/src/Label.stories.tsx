import type {Meta, StoryObj} from "@storybook/react";
import {Avatar} from "@material-tailwind-ui/avatar";
import {Label} from "@material-tailwind-ui/label";
import {Input} from "@material-tailwind-ui/input";

const meta: Meta<typeof Avatar> = {
    component: Avatar,
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    render: () => (
        <div style={{display: 'grid', gap: '0.5rem'}}>
            <Label htmlFor={'first-name'}>
                First name
            </Label>
            <Input id={'first-name'} />
        </div>
    ),
};
