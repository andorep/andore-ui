import type {Meta, StoryObj} from "@storybook/react";
import {Switch, SwitchThumb} from "@andore-ui/switch";

const meta: Meta<typeof Switch> = {
    component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    render: () => (
        <>
            <Switch>
                <SwitchThumb/>
            </Switch>
        </>
    ),
};

export const Icons: Story = {
    render: () => {
        const CancelIcon = () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
        )
        const CheckIcon = () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
            </svg>
        );
        return (
            <>
                <Switch>
                    <SwitchThumb checkedIcon={<CheckIcon/>}>
                        <CancelIcon/>
                    </SwitchThumb>
                </Switch>
            </>
        )
    },
};

export const Disabled: Story = {
    render: () => {
        const CancelIcon = () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
        )
        const CheckIcon = () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
            </svg>
        );
        return (
            <div className={'flex flex-row gap-2'}>
                <Switch disabled>
                    <SwitchThumb/>
                </Switch>
                <Switch disabled checked={true}>
                    <SwitchThumb/>
                </Switch>
                <Switch disabled>
                    <SwitchThumb checkedIcon={<CheckIcon/>}>
                        <CancelIcon/>
                    </SwitchThumb>
                </Switch>
                <Switch disabled checked={true}>
                    <SwitchThumb checkedIcon={<CheckIcon/>}>
                        <CancelIcon/>
                    </SwitchThumb>
                </Switch>
            </div>
        )
    },
};
