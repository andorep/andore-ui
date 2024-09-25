import type {Meta, StoryObj} from "@storybook/react";
import {Textarea} from "@andore-ui/textarea";

const variantControl = {
    control: 'radio' as const,
    options: ['filled', 'outlined'],
}

const meta: Meta<typeof Textarea> = {
    component: Textarea,
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    render: ({variant}) => (
        <>
            <Textarea label="Label" variant={variant} placeholder="Placeholder" />
        </>
    ),
    args: {
        variant:'filled',
    },
    argTypes: {
        variant: variantControl,
    },
};
