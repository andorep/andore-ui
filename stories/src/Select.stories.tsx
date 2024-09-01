import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import {Select} from "@material-tailwind-ui/select";

const variantControl = {
    control: 'radio' as const,
    options: ['filled', 'outlined'],
}

const meta: Meta<typeof Select> = {
    component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: ({variant}) => {
        const [value, setValue] = React.useState('');

        const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            console.log(e.target.value);
            setValue(e.target.value);
        }
        return (
            <>
                <Select value={value} onChange={handleChange} variant={variant} placeholder={"Select an item"} label={'Items'}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </Select>
            </>
        )
    },
    args: {
        variant: 'filled',
    },
    argTypes: {
        variant: variantControl,
    },
};
