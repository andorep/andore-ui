import type {Meta, StoryObj} from "@storybook/react";
import {Checkbox, CheckboxIndicator} from "@material-tailwind-ui/checkbox";
import {Label} from "@material-tailwind-ui/label";

const colorsControl = {
    control: "select" as const,
    options: ["primary", "secondary", "info", "success", "warning", "error"],
};

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: () => (
        <form>
            <div className="flex items-center">
                <Checkbox id="c1">
                    <CheckboxIndicator/>
                </Checkbox>
                <Label htmlFor="c1">Accept terms and conditions.</Label>
            </div>
        </form>
    ),
};

export const Colors: Story = {
    render: ({color}) => (
        <form>
            <div className="flex items-center">
                <Checkbox id="c1" color={color}>
                    <CheckboxIndicator/>
                </Checkbox>
                <Label htmlFor="c1">Accept terms and conditions.</Label>
            </div>
        </form>
    ),
    args: {
        color: "primary",
    },
    argTypes: {
        color: colorsControl,
    },
};

export const Disabled: Story = {
    render: () => (
        <form>
            <div className="flex items-center">
                <Checkbox id="c1" disabled>
                    <CheckboxIndicator/>
                </Checkbox>
                <Label htmlFor="c1">Accept terms and conditions.</Label>
            </div>
            <div className="flex items-center">
                <Checkbox id="c2" disabled checked>
                    <CheckboxIndicator/>
                </Checkbox>
                <Label htmlFor="c2">Accept terms and conditions.</Label>
            </div>
        </form>
    ),
};

export const CustomIcon: Story = {
    render: () => (
        <form>
            <div className="flex items-center">
                <Checkbox id="c1">
                    <CheckboxIndicator>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="currentColor"
                        >
                            <path
                                d="M718-313 604-426l57-56 57 56 141-141 57 56-198 198ZM440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Z"/>
                        </svg>
                    </CheckboxIndicator>
                </Checkbox>
                <Label htmlFor="c1">Accept terms and conditions.</Label>
            </div>
        </form>
    ),
};
