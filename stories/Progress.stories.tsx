import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import LinearProgress from "../src/LinearProgress";

const sizeControl = {
    control: 'select' as const,
    options: ['sm', 'md']
}

const meta: Meta<typeof LinearProgress> = {
    component: LinearProgress,
};
export default meta;

type Story = StoryObj<typeof LinearProgress>;

export const Default: Story = {
    render: () => {
        const [progress, setProgress] = React.useState(0);

        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(66), 500);
            return () => clearTimeout(timer);
        }, []);

        return (
            <LinearProgress value={progress}/>
        );
    }
};

export const Sizes: Story = {
    render: ({size}) => {
        const [progress, setProgress] = React.useState(0);

        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(66), 500);
            return () => clearTimeout(timer);
        }, []);

        return (
            <>
                <LinearProgress size={size} value={progress}/>
            </>
        );
    },
    args: {
        size: 'sm'
    },
    argTypes: {
        size: sizeControl
    }
}

export const Indeterminate: Story = {
    render: ({size}) => {
        return (
            <LinearProgress size={size}/>
        );
    },
    args: {
        size: 'sm'
    },
    argTypes: {
        size: sizeControl
    }
}
