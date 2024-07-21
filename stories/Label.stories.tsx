import type {Meta, StoryObj} from "@storybook/react";
import Avatar from "@/Avatar";
import Label from "@/Label";
import Input from "@/Input";

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
