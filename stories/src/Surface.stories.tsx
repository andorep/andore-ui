import type {Meta, StoryObj} from "@storybook/react";
import {Surface, SurfaceVariant} from "@material-tailwind-ui/surface";

const variantControl = {
    control: 'select' as const,
    options: ['elevated', 'filled', 'outlined'] as SurfaceVariant[],
}

const meta: Meta<typeof Surface> = {
    component: Surface,
};
export default meta;

type Story = StoryObj<typeof Surface>;

export const Default: Story = {
    render: () => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Surface>
                Display large
            </Surface>
        </div>
    ),
};


export const Variants: Story = {
    render: ({variant}) => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Surface variant={variant}>
                Display large
            </Surface>
        </div>
    ),
    args: {
        variant: 'elevated',
    },
    argTypes: {
        variant: variantControl,
    },
};
