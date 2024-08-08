import type {Meta, StoryObj} from "@storybook/react";
import {RadioGroup, RadioButton, RadioButtonSize} from "@material-tailwind-ui/radio";

const colorControl = {
    control: 'select' as const,
    options: ['primary', 'secondary', 'info', 'success', 'warning', 'error'],
}
const sizeControl = {
    control: 'select' as const,
    options: ['sm', 'md', 'lg'] as RadioButtonSize[]
}

const meta: Meta<typeof RadioButton> = {
    component: RadioButton,
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    render: () => (
        <>
            <RadioGroup>
                <RadioButton id={'1'} value="1">Option 1</RadioButton>
                <RadioButton id={'2'} value="2">Option 2</RadioButton>
            </RadioGroup>
        </>
    ),
};

export const Colors: Story = {
    render: ({color}) => (
        <>
            <RadioGroup>
                <RadioButton id={'1'} value="1" color={color}>Option 1</RadioButton>
                <RadioButton id={'2'} value="2" color={color}>Option 2</RadioButton>
            </RadioGroup>
        </>
    ),
    args: {
        color: 'primary',
    },
    argTypes: {
        color: colorControl,
    },
}

export const Sizes: Story = {
    render: ({size}) => (
        <>
            <RadioGroup>
                <RadioButton id={'1'} value="1" size={size}>Option 1</RadioButton>
                <RadioButton id={'2'} value="2" size={size}>Option 2</RadioButton>
            </RadioGroup>
        </>
    ),
    args: {
        size: 'md',
    },
    argTypes: {
        size: sizeControl,
    },
};

export const Disabled: Story = {
    render: () => (
        <>
            <RadioGroup value={'1'}>
                <RadioButton id={'1'} value="1" disabled>Option 1</RadioButton>
                <RadioButton id={'2'} value="2" disabled>Option 2</RadioButton>
            </RadioGroup>
        </>
    ),
};
