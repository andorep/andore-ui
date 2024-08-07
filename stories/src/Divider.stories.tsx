import type {Meta, StoryObj} from "@storybook/react";
import {Divider} from "@material-tailwind-ui/divider";
import {Typography} from "@material-tailwind-ui/typography";


const disableSpaceBetweenControl = {
    control: 'boolean' as const,
};

const meta: Meta<typeof Divider> = {
    component: Divider,
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
    render: () => (
        <>
            <Typography variant="display" size="sm" color={'primary'}>
                Awesome Divider
            </Typography>
            <Divider/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: '16px',
                marginTop: '1rem',
                gap: 3
            }}>
                <Typography variant="body" size="sm" color={'primary'}>
                    Yep
                </Typography>
                <Divider orientation={'vertical'} decorative/>
                <Typography variant="body" size="sm" color={'primary'}>
                    You are right
                </Typography>
                <Divider orientation={'vertical'} decorative/>
                <Typography variant="body" size="sm" color={'primary'}>
                    Agree
                </Typography>
            </div>
        </>
    ),
};

export const DisableSpaceBetween: Story = {
    render: ({disableSpaceBetween}) => (
        <>
            <Typography variant="display" size="sm"  color={'primary'}>
                Awesome Divider
            </Typography>
            <Divider disableSpaceBetween={disableSpaceBetween}/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: '16px',
                gap: 3
            }}>
                <Typography variant="body" size="sm" color={'primary'}>
                    Yep
                </Typography>
                <Divider orientation={'vertical'} decorative disableSpaceBetween={disableSpaceBetween}/>
                <Typography variant="body" size="sm" color={'primary'}>
                    You are right
                </Typography>
                <Divider orientation={'vertical'} decorative disableSpaceBetween={disableSpaceBetween}/>
                <Typography variant="body" size="sm" color={'primary'}>
                    Agree
                </Typography>
            </div>
        </>
    ),
    args: {
        disableSpaceBetween: true
    },
    argTypes: {
        disableSpaceBetween: disableSpaceBetweenControl
    }
};
