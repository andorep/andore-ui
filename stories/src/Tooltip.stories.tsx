import type {Meta, StoryObj} from "@storybook/react";
import {Tooltip} from "@andore-ui/tooltip";

const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    render: () => (
        <p>
            You know, we have <Tooltip title="Naa, for real?"><span className={'underline cursor-pointer'}>tooltips</span></Tooltip> ;)
        </p>
    ),
};
