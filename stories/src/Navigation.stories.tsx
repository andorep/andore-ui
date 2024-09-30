import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import {NavigationList, NavigationHeadline, NavigationItem, NavigationDivider} from "@andore-ui/navigation";

const condensedControl = {
    control: 'boolean' as const,
};

const variantControl = {
    control: 'select' as const,
    options: ['standard', 'vertical', 'no-padding'],
}

const iconOnlyControl = {
    control: 'boolean' as const,
}

const meta: Meta<typeof NavigationList> = {
    component: NavigationList,
};
export default meta;

type Story = StoryObj<typeof NavigationList>;


const InboxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
        <path
            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z"/>
    </svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
        <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
    </svg>
);

const FavoriteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
        <path
            d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
    </svg>
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
        <path
            d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
    </svg>
);

const FolderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
        <path
            d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/>
    </svg>
);

export const Default: Story = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render: ({condensed, variant, iconOnly}) => {
        const [active, setActive] = React.useState(0);
        const handleClick = (index: number) => (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            setActive(index);
        }
        return (
            <div className={`${iconOnly ? 'w-fit' : 'w-[500px]'} py-4 bg-surface dark:bg-surface-dark-DEFAULT`}>
                <NavigationList condensed={condensed} variant={variant} iconOnly={iconOnly}>
                    <NavigationHeadline>Mail</NavigationHeadline>
                    <NavigationItem
                        active={active === 0}
                        onClick={handleClick(0)}
                        icon={<InboxIcon/>}
                        trailing={999}
                    >
                        Inbox
                    </NavigationItem>
                    <NavigationItem
                        active={active === 1}
                        onClick={handleClick(1)}
                        icon={<SendIcon/>}
                        trailing={99}
                    >
                        Outbox
                    </NavigationItem>
                    <NavigationItem
                        active={active === 2}
                        onClick={handleClick(2)}
                        icon={<FavoriteIcon/>}
                        trailing={9}
                    >
                        Favorites
                    </NavigationItem>
                    <NavigationItem
                        active={active === 3}
                        onClick={handleClick(3)}
                        icon={<TrashIcon/>}
                        trailing={1}
                    >
                        Trash
                    </NavigationItem>
                    <NavigationDivider/>
                    <NavigationHeadline>Personal Folders</NavigationHeadline>
                    <NavigationItem
                        active={active === 4}
                        onClick={handleClick(4)}
                        icon={<FolderIcon/>}
                    >
                        Friends
                    </NavigationItem>
                    <NavigationItem
                        active={active === 5}
                        onClick={handleClick(5)}
                        icon={<FolderIcon/>}
                    >
                        Volunteering
                    </NavigationItem>
                    <NavigationItem
                        active={active === 6}
                        onClick={handleClick(6)}
                        icon={<FolderIcon/>}
                    >
                        Work
                    </NavigationItem>
                </NavigationList>
            </div>
        )
    },
    args: {
        condensed: false,
        iconOnly: false,
    },
    argTypes: {
        condensed: condensedControl,
        variant: variantControl,
        iconOnly: iconOnlyControl,
    },
};
