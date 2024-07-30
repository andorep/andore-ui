import type {Meta, StoryObj} from "@storybook/react";
import {ToggleButton, ToggleButtonGroup} from "@material-tailwind-ui/toggle-button";
import React from "react";

const densityControl = {
    control: "inline-radio" as const,
    options: [0, -1, -2, -3]
}
const colorControl = {
    control: "select" as const,
    options: ["primary", "secondary", "info", "success", "warning", "error"]
}

const meta: Meta<typeof ToggleButton> = {
    component: ToggleButton,
};
export default meta;

type Story = StoryObj<typeof ToggleButton>;


export const Default: Story = {
    render: () => {
        const [selected, setSelected] = React.useState(false);
        return (
            <>
                <ToggleButton selected={selected} onClick={() => setSelected(!selected)}>
                    Toggle
                </ToggleButton>
            </>
        )
    },
};

export const Group: Story = {
    render: () => {
        const [arraySelected, setArraySelected] = React.useState([false, false, false]);
        const setSelected = (index: number) => {
            const newArray = [...arraySelected];
            newArray[index] = !newArray[index];
            setArraySelected(newArray);
        }
        return (
            <ToggleButtonGroup>
                <ToggleButton selected={arraySelected[0]} onClick={() => setSelected(0)}>
                    Toggle
                </ToggleButton>
                <ToggleButton selected={arraySelected[1]} onClick={() => setSelected(1)}>
                    Toggle
                </ToggleButton>
                <ToggleButton selected={arraySelected[2]} onClick={() => setSelected(2)}>
                    Toggle
                </ToggleButton>
            </ToggleButtonGroup>
        )
    },
};

export const GroupDensity: Story = {
    render: ({density}) => {
        const [arraySelected, setArraySelected] = React.useState([false, false, false]);
        const setSelected = (index: number) => {
            const newArray = [...arraySelected];
            newArray[index] = !newArray[index];
            setArraySelected(newArray);
        }
        return (
            <ToggleButtonGroup density={density}>
                <ToggleButton selected={arraySelected[0]} onClick={() => setSelected(0)}>
                    Toggle
                </ToggleButton>
                <ToggleButton selected={arraySelected[1]} onClick={() => setSelected(1)}>
                    Toggle
                </ToggleButton>
                <ToggleButton selected={arraySelected[2]} onClick={() => setSelected(2)}>
                    Toggle
                </ToggleButton>
            </ToggleButtonGroup>
        )
    },
    args: {
        density: -1
    },
    argTypes: {
        density: densityControl
    }
};

const FootPrintIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
            d="M315-240q-77 0-117-57t-38-128l-18-27q-11-17-36.5-77T80-680q0-103 51-171.5T260-920q85 0 132.5 75.5T440-680q0 58-16 107t-28 79l8 13q8 14 22 44.5t14 63.5q0 57-35.5 95T315-240ZM210-496l110-22q13-32 26.5-73t13.5-89q0-60-27.5-110T260-840q-45 0-72.5 50T160-680q0 63 17.5 111.5T210-496Zm105 176q19 0 32-14t13-39q0-17-8-35t-16-32l-96 20q0 40 17.5 70t57.5 30ZM645-40q-54 0-89.5-38T520-173q0-33 14-63.5t22-44.5l8-13q-12-30-28-79t-16-107q0-89 47.5-164.5T700-720q78 0 129 68.5T880-480q0 91-25.5 150.5T818-253l-18 28q1 71-38.5 128T645-40Zm105-256q15-24 32.5-72T800-480q0-60-27.5-110T700-640q-45 0-72.5 50T600-480q0 48 13.5 88.5T640-318l110 22ZM645-120q40 0 57.5-30t17.5-70l-96-20q-8 14-16 32t-8 35q0 20 12.5 36.5T645-120Z"/>
    </svg>
)

const TrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
            d="M160-340v-380q0-53 27.5-84.5t72.5-48q45-16.5 102.5-22T480-880q66 0 124.5 5.5t102 22q43.5 16.5 68.5 48t25 84.5v380q0 59-40.5 99.5T660-200l60 60v20h-80l-80-80H400l-80 80h-80v-20l60-60q-59 0-99.5-40.5T160-340Zm320-460q-106 0-155 12.5T258-760h448q-15-17-64.5-28.5T480-800ZM240-560h200v-120H240v120Zm420 80H240h480-60Zm-140-80h200v-120H520v120ZM340-320q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm280 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm-320 40h360q26 0 43-17t17-43v-140H240v140q0 26 17 43t43 17Zm180-480h226-448 222Z"/>
    </svg>
);

const DirectionsCarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
            d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z"/>
    </svg>
);

export const WithStartIcon: Story = {
    render: ({density}) => {
        const [arraySelected, setArraySelected] = React.useState([false, false, false]);
        const setSelected = (index: number) => {
            const newArray = [...arraySelected];
            newArray[index] = !newArray[index];
            setArraySelected(newArray);
        }
        return (
            <ToggleButtonGroup density={density}>
                <ToggleButton startIcon={<FootPrintIcon/>} selected={arraySelected[0]} onClick={() => setSelected(0)}>
                    Walking
                </ToggleButton>
                <ToggleButton startIcon={<TrainIcon/>} selected={arraySelected[1]} onClick={() => setSelected(1)}>
                    Transit
                </ToggleButton>
                <ToggleButton startIcon={<DirectionsCarIcon/>} selected={arraySelected[2]}
                              onClick={() => setSelected(2)}>
                    Driving
                </ToggleButton>
            </ToggleButtonGroup>
        )
    },
    args: {
        density: 0
    },
    argTypes: {
        density: densityControl
    }
};


const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
        <path
            d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/>
    </svg>
);

export const CustomCheckedIcon: Story = {
    render: ({density}) => {
        const [arraySelected, setArraySelected] = React.useState([false, false, false]);
        const setSelected = (index: number) => {
            const newArray = [...arraySelected];
            newArray[index] = !newArray[index];
            setArraySelected(newArray);
        }
        return (
            <ToggleButtonGroup density={density}>
                <ToggleButton checkedIcon={<HeartIcon/>} selected={arraySelected[0]} onClick={() => setSelected(0)}>
                    I love cars
                </ToggleButton>
                <ToggleButton checkedIcon={<HeartIcon/>} selected={arraySelected[1]} onClick={() => setSelected(1)}>
                    I love trains
                </ToggleButton>
                <ToggleButton checkedIcon={<HeartIcon/>} selected={arraySelected[2]} onClick={() => setSelected(2)}>
                    I love walking
                </ToggleButton>
            </ToggleButtonGroup>
        )
    },
    args: {
        density: 0
    },
    argTypes: {
        density: densityControl
    }
}

export const Colors: Story = {
    render: ({color}) => {
        const [selected, setSelected] = React.useState(false);
        return (
            <>
                <ToggleButton selected={selected} onClick={() => setSelected(!selected)} color={color}>
                    Toggle
                </ToggleButton>
            </>
        )
    },
    args: {
        color: "primary"
    },
    argTypes: {
        color: colorControl
    }
};
