import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import DropdownMenu from "@/DropdownMenu";
import DropdownMenuTrigger from "@/DropdownMenuTrigger";
import DropdownMenuPortal from "@/DropdownMenuPortal";
import DropdownMenuContent from "@/DropdownMenuContent";
import DropdownMenuItem from "@/DropdownMenuItem";
import DropdownMenuSub from "@/DropdownMenuSub";
import DropdownMenuSubTrigger from "@/DropdownMenuSubTrigger";
import DropdownMenuSubContent from "@/DropdownMenuSubContent";
import DropdownMenuSeparator from "@/DropdownMenuSeparator";
import DropdownMenuCheckboxItem from "@/DropdownMenuCheckboxItem";
import DropdownMenuItemIndicator from "@/DropdownMenuItemIndicator";
import DropdownMenuLabel from "@/DropdownMenuLabel";
import DropdownMenuRadioGroup from "@/DropdownMenuRadioGroup";
import DropdownMenuRadioItem from "@/DropdownMenuRadioItem";
import DropdownMenuArrow from "@/DropdownMenuArrow";
import IconButton from "@/IconButton";
import DropdownMenuItemTrailing from "@/DropdownMenuItemTrailing";
import DropdownMenuItemLeading from "@/DropdownMenuItemLeading";

const meta: Meta<typeof DropdownMenu> = {
    component: DropdownMenu,
};
export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
    render: () => {
        const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
        const [urlsChecked, setUrlsChecked] = React.useState(false);
        const [person, setPerson] = React.useState('pedro');

        return (
            <div style={{paddingLeft: 100}}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <IconButton aria-label="Customise options">
                            +
                        </IconButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuContent sideOffset={5}>
                            <DropdownMenuItem defaultChecked={true}>
                                New Tab
                                <DropdownMenuItemTrailing>
                                    ⌘+T
                                </DropdownMenuItemTrailing>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <DropdownMenuItemLeading>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                         width="24px" fill="currentColor">
                                        <path
                                            d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
                                    </svg>
                                </DropdownMenuItemLeading>
                                New Window
                                <DropdownMenuItemTrailing>
                                    ⌘+N
                                </DropdownMenuItemTrailing>
                            </DropdownMenuItem>
                            <DropdownMenuItem disabled>
                                New Private Window
                                <DropdownMenuItemTrailing>
                                    ⌘+⇧+N
                                </DropdownMenuItemTrailing>
                            </DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    More Tools
                                    <DropdownMenuItemTrailing>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                             width="24px" fill="currentColor">
                                            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                                        </svg>
                                    </DropdownMenuItemTrailing>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
                                        <DropdownMenuItem>
                                            <DropdownMenuItemLeading>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                     viewBox="0 -960 960 960"
                                                     width="24px" fill="currentColor">
                                                    <path
                                                        d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                                                </svg>
                                            </DropdownMenuItemLeading>
                                            Save Page As…
                                            <DropdownMenuItemTrailing>
                                                ⌘+S
                                            </DropdownMenuItemTrailing>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Create Shortcut…
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Name Window…
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem>
                                            Developer Tools
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuSeparator/>

                            <DropdownMenuLabel>
                                Checkbox
                            </DropdownMenuLabel>
                            <DropdownMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
                                <DropdownMenuItemIndicator>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                         width="24px" fill="currentColor">
                                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                    </svg>
                                </DropdownMenuItemIndicator>
                                Show Bookmarks
                                <DropdownMenuItemTrailing>
                                    ⌘+B
                                </DropdownMenuItemTrailing>
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
                                <DropdownMenuItemIndicator>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                         width="24px" fill="currentColor">
                                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                    </svg>
                                </DropdownMenuItemIndicator>
                                Show Full URLs
                            </DropdownMenuCheckboxItem>

                            <DropdownMenuSeparator/>

                            <DropdownMenuLabel>
                                Radio button
                            </DropdownMenuLabel>
                            <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
                                <DropdownMenuRadioItem value="pedro">
                                    <DropdownMenuItemIndicator>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                             width="24px" fill="currentColor">
                                            <path
                                                d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                        </svg>
                                    </DropdownMenuItemIndicator>
                                    Pedro Duarte
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="colm">
                                    <DropdownMenuItemIndicator>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                             width="24px" fill="currentColor">
                                            <path
                                                d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                        </svg>
                                    </DropdownMenuItemIndicator>
                                    Colm Tuite
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                            <DropdownMenuArrow/>
                        </DropdownMenuContent>
                    </DropdownMenuPortal>
                </DropdownMenu>
            </div>
        )
    }
};

export const Condensed: Story = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render: ({condensed}) => {
        const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
        const [urlsChecked, setUrlsChecked] = React.useState(false);
        const [person, setPerson] = React.useState('pedro');
        return (

            <div style={{paddingLeft: 100}}>
                <DropdownMenu condensed={condensed}>
                    <DropdownMenuTrigger asChild>
                        <IconButton aria-label="Customise options">
                            +
                        </IconButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuContent sideOffset={5}>
                            <DropdownMenuItem defaultChecked={true}>
                                New Tab
                                <DropdownMenuItemTrailing>
                                    ⌘+T
                                </DropdownMenuItemTrailing>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <DropdownMenuItemLeading>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                         width="24px" fill="currentColor">
                                        <path
                                            d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
                                    </svg>
                                </DropdownMenuItemLeading>
                                New Window
                                <DropdownMenuItemTrailing>
                                    ⌘+N
                                </DropdownMenuItemTrailing>
                            </DropdownMenuItem>
                            <DropdownMenuItem disabled>
                                New Private Window
                                <DropdownMenuItemTrailing>
                                    ⌘+⇧+N
                                </DropdownMenuItemTrailing>
                            </DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    More Tools
                                    <DropdownMenuItemTrailing>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                             width="24px" fill="currentColor">
                                            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                                        </svg>
                                    </DropdownMenuItemTrailing>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
                                        <DropdownMenuItem>
                                            <DropdownMenuItemLeading>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                     viewBox="0 -960 960 960"
                                                     width="24px" fill="currentColor">
                                                    <path
                                                        d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                                                </svg>
                                            </DropdownMenuItemLeading>
                                            Save Page As…
                                            <DropdownMenuItemTrailing>
                                                ⌘+S
                                            </DropdownMenuItemTrailing>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Create Shortcut…
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Name Window…
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem>
                                            Developer Tools
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuSeparator/>

                            <DropdownMenuLabel>
                                Checkbox
                            </DropdownMenuLabel>
                            <DropdownMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
                                <DropdownMenuItemIndicator>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                         width="24px" fill="currentColor">
                                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                    </svg>
                                </DropdownMenuItemIndicator>
                                Show Bookmarks
                                <DropdownMenuItemTrailing>
                                    ⌘+B
                                </DropdownMenuItemTrailing>
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
                                <DropdownMenuItemIndicator>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                         width="24px" fill="currentColor">
                                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                    </svg>
                                </DropdownMenuItemIndicator>
                                Show Full URLs
                            </DropdownMenuCheckboxItem>

                            <DropdownMenuSeparator/>

                            <DropdownMenuLabel>
                                Radio button
                            </DropdownMenuLabel>
                            <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
                                <DropdownMenuRadioItem value="pedro">
                                    <DropdownMenuItemIndicator>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                             width="24px" fill="currentColor">
                                            <path
                                                d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                        </svg>
                                    </DropdownMenuItemIndicator>
                                    Pedro Duarte
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="colm">
                                    <DropdownMenuItemIndicator>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                             width="24px" fill="currentColor">
                                            <path
                                                d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                        </svg>
                                    </DropdownMenuItemIndicator>
                                    Colm Tuite
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                            <DropdownMenuArrow/>
                        </DropdownMenuContent>
                    </DropdownMenuPortal>
                </DropdownMenu>
            </div>
        )
    },
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        condensed: true
    },
    argTypes: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        condensed: {
            control: 'boolean'
        }
    }
}
