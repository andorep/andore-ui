import type {Meta, StoryObj} from "@storybook/react";
import {Typography, TypographySizes} from "@andore-ui/typography";
import {TypographyColors, TypographyVariants} from "@andore-ui/typography/src";

const variantControl = {
    control: 'select' as const,
    options: ['display', 'headline', 'title', 'body'] as TypographyVariants[],
}

const sizeControl = {
    control: 'select' as const,
    options: ['lg', 'md', 'sm'] as TypographySizes[],
}

const colorControl = {
    control: 'select' as const,
    options: ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as TypographyColors[],
}

const meta: Meta<typeof Typography> = {
    component: Typography,
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
    render: () => (
        <div style={{display: 'grid', gap: '0.5rem'}}>
            <Typography variant="display" size="lg">
                Display large
            </Typography>
            <Typography variant="display" size="md">
                Display medium
            </Typography>
            <Typography variant="display" size="sm">
                Display small
            </Typography>
            <Typography variant="headline" size="lg">
                Headline large
            </Typography>
            <Typography variant="headline" size="md">
                Display small
            </Typography>
            <Typography variant="headline" size="sm">
                Display small
            </Typography>
            <Typography variant="title" size="lg">
                Display small
            </Typography>
            <Typography variant="title" size="md">
                Display small
            </Typography>
            <Typography variant="title" size="sm">
                Display small
            </Typography>
            <Typography variant="body" size="lg">
                Body large
            </Typography>
            <Typography variant="body" size="md">
                Body medium
            </Typography>
            <Typography variant="body" size="sm">
                Body small
            </Typography>
        </div>
    ),
};

export const Variant: Story = {
    // @ts-ignore
    render: ({variant, size}) => (
        <div style={{display: 'grid', gap: '0.5rem'}}>
            <Typography variant={variant} size={size}>
                First name
            </Typography>
        </div>
    ),
    args: {
        variant: 'display',
        size: 'md',
    },
    argTypes: {
        variant: variantControl,
        size: sizeControl,
    }
};

export const Color: Story = {
    // @ts-ignore
    render: ({color,size, variant}) => (
        <div style={{display: 'grid', gap: '0.5rem'}}>
            <Typography color={color} size={size} variant={variant}>
                First name
            </Typography>
        </div>
    ),
    args: {
        variant: 'display',
        size: 'lg',
        color: 'primary',
    },
    argTypes: {
        variant: variantControl,
        size: sizeControl,
        color: colorControl,
    }
};
