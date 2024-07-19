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
            <div style={{padding: 100}}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <IconButton
                            aria-label="Customise options"
                        >
                            +
                        </IconButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuContent
                            sideOffset={5}
                        >
                            <DropdownMenuItem trailing={'⌘+T'}>
                                New Tab{' '}
                            </DropdownMenuItem>
                            <DropdownMenuItem trailing={'⌘+N'}>
                                New Window{' '}
                            </DropdownMenuItem>
                            <DropdownMenuItem disabled trailing={'⌘+⇧+N'}>
                                New Private Window{' '}
                            </DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger
                                >
                                    More Tools
                                    <div
                                    >
                                        {">"}
                                    </div>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent

                                        sideOffset={2}
                                        alignOffset={-5}
                                    >
                                        <DropdownMenuItem
                                        >
                                            Save Page As…{' '}
                                            <div
                                            >
                                                ⌘+S
                                            </div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                        >
                                            Create Shortcut…
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                        >
                                            Name Window…
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem
                                        >
                                            Developer Tools
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuSeparator/>

                            <DropdownMenuCheckboxItem

                                checked={bookmarksChecked}
                                onCheckedChange={setBookmarksChecked}
                            >
                                <DropdownMenuItemIndicator
                                >
                                    {">"}
                                </DropdownMenuItemIndicator>
                                Show Bookmarks{' '}
                                <div
                                >
                                    ⌘+B
                                </div>
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem

                                checked={urlsChecked}
                                onCheckedChange={setUrlsChecked}
                            >
                                <DropdownMenuItemIndicator
                                >
                                    {">"}
                                </DropdownMenuItemIndicator>
                                Show Full URLs
                            </DropdownMenuCheckboxItem>

                            <DropdownMenuSeparator/>

                            <DropdownMenuLabel>
                                People
                            </DropdownMenuLabel>
                            <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
                                <DropdownMenuRadioItem

                                    value="pedro"
                                >
                                    <DropdownMenuItemIndicator
                                    >
                                        ...
                                    </DropdownMenuItemIndicator>
                                    Pedro Duarte
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem

                                    value="colm"
                                >
                                    <DropdownMenuItemIndicator
                                    >
                                        ...
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
