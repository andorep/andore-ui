import type {Meta, StoryObj} from "@storybook/react";
import {List, ListItem,ListItemText} from "@andore-ui/list";

const dividerControl = {
    control: 'boolean' as const,
}

const meta: Meta<typeof List> = {
    component: List,
};
export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
    render: ({divider}) => (
        <div className={'w-80'}>
            <List divider={divider}>
                <ListItem onClick={()=>{}}>
                    <ListItemText  supportingText={'Supporting text'}>Headline</ListItemText>
                    D
                </ListItem>
                <ListItem onClick={()=>{}}>
                    <ListItemText  supportingText={'Supporting text'}>Headline</ListItemText>
                    D
                </ListItem>
                <ListItem onClick={()=>{}}>
                    <ListItemText  supportingText={'Supporting text'}>Headline</ListItemText>
                    D
                </ListItem>
            </List>
        </div>
    ),
    args: {
        divider: false,
    },
    argTypes: {
        divider: dividerControl,
    },
};
