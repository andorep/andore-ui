import type {Meta, StoryObj} from "@storybook/react";
import {Card, CardContent, CardVariant} from "@material-tailwind-ui/card";

const variantControl = {
    control: 'select' as const,
    options: ['elevated', 'filled', 'outlined'] as CardVariant[],
}

const guttersControl = {
    control: 'boolean' as const,
}

const meta: Meta<typeof Card> = {
    component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Card>
                <CardContent>
                    Display large
                </CardContent>
            </Card>
        </div>
    ),
};


export const Variants: Story = {
    render: ({variant}) => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Card variant={variant}>
                <CardContent>
                    Display large
                </CardContent>
            </Card>
        </div>
    ),
    args: {
        variant: 'elevated',
    },
    argTypes: {
        variant: variantControl,
    },
};

export const Draggable: Story = {
    render: ({variant}) => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Card draggable={true} variant={variant}>
                <CardContent>
                    Display large
                </CardContent>
            </Card>
        </div>
    ),
    args: {
        variant: 'elevated',
    },
    argTypes: {
        variant: variantControl,
    },
};


export const DisabledDragImage: Story = {
    render: ({variant}) => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Card draggable={true} disabledDragImage={true} variant={variant}>
                <CardContent>
                    Display large
                </CardContent>
            </Card>
        </div>
    ),
    args: {
        variant: 'elevated',
    },
    argTypes: {
        variant: variantControl,
    },
};

export const DisabledGutters: Story = {
    render: ({variant, disabledGutters}) => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Card disabledGutters={disabledGutters} variant={variant}>
                <CardContent>
                    Display large
                </CardContent>
            </Card>
        </div>
    ),
    args: {
        disabledGutters: true,
        variant: 'elevated',
    },
    argTypes: {
        disabledGutters: guttersControl,
        variant: variantControl,
    },
};

export const Disabled: Story = {
    render: ({variant}) => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Card disabled={true} variant={variant}>
                <CardContent>
                    Display large
                </CardContent>
            </Card>
        </div>
    ),
    args: {
        variant: 'elevated',
    },
    argTypes: {
        variant: variantControl,
    },
};
