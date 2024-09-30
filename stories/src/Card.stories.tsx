import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import {
    Card,
    CardContent,
    CardHeader,
    CardAvatar,
    CardIconButton,
    CardDivider,
    CardMedia,
    CardVariant
} from "@andore-ui/card";
import {IconButton} from "@andore-ui/icon-button";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AvatarSrc from '../assets/3d_avatar_13.png';
import { Typography } from "@andore-ui/typography";
import { LinearProgress } from "@andore-ui/linear-progress";

const variantControl = {
    control: 'select' as const,
    options: ['elevated', 'filled', 'outlined'] as CardVariant[],
}

const guttersControl = {
    control: 'boolean' as const,
}

const meta: Meta<typeof Card> = {
    component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Card>
                <CardContent>
                    Display large
                </CardContent>
            </Card>
        </div>
    ),
};


export const Variants: Story = {
    render: ({variant}) => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Card variant={variant}>
                <CardContent>
                    Display large
                </CardContent>
            </Card>
        </div>
    ),
    args: {
        variant: 'elevated',
    },
    argTypes: {
        variant: variantControl,
    },
};

export const Draggable: Story = {
    render: ({variant}) => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Card draggable={true} variant={variant}>
                <CardContent>
                    Display large
                </CardContent>
            </Card>
        </div>
    ),
    args: {
        variant: 'elevated',
    },
    argTypes: {
        variant: variantControl,
    },
};


export const DisabledDragImage: Story = {
    render: ({variant}) => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Card draggable={true} disabledDragImage={true} variant={variant}>
                <CardContent>
                    Display large
                </CardContent>
            </Card>
        </div>
    ),
    args: {
        variant: 'elevated',
    },
    argTypes: {
        variant: variantControl,
    },
};

export const DisabledGutters: Story = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render: ({variant, disabledGutters}) => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Card variant={variant}>
                <CardContent disabledGutters={disabledGutters}>
                    Display large
                </CardContent>
            </Card>
        </div>
    ),
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        disabledGutters: true,
        variant: 'elevated',
    },
    argTypes: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        disabledGutters: guttersControl,
        variant: variantControl,
    },
};

export const Disabled: Story = {
    render: ({variant}) => (
        <div style={{display: 'grid', gap: '0.5rem', width: '300px'}}>
            <Card disabled={true} variant={variant}>
                <CardContent>
                    Display large
                </CardContent>
            </Card>
        </div>
    ),
    args: {
        variant: 'elevated',
    },
    argTypes: {
        variant: variantControl,
    },
};

const MoreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
            d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>
    </svg>
)

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
            d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
    </svg>
);

const FilledHeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
            d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/>
    </svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
            d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/>
    </svg>
);

const SharedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path
            d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z"/>
    </svg>
);

export const CardWithDetails: Story = {
    render: ({variant}) => {
        const [isLiked, setIsLiked] = React.useState(false);
        return (
            <div style={{display: 'grid', gap: '0.5rem', width: '500px'}}>
                <Card variant={variant} disabledStates={true}>
                    <CardHeader
                        title="Card title"
                        subtitle="Card subtitle"
                        avatar={<CardAvatar src={AvatarSrc} alt="Avatar"/>}
                        action={<CardIconButton><MoreIcon/></CardIconButton>}
                    />
                    <CardMedia
                        alt="Healthy food"
                        src="https://images.unsplash.com/photo-1659037787192-ee2a4823cdde?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <CardContent>
                        Eating a healthy, balanced diet today! 🥗
                    </CardContent>
                    <CardDivider/>
                    <CardContent>
                        <IconButton toggleIcon={<FilledHeartIcon/>} onClick={() => setIsLiked(!isLiked)}
                                    toggled={isLiked}>
                            <HeartIcon/>
                        </IconButton>
                        <IconButton>
                            <ChatIcon/>
                        </IconButton>
                        <IconButton>
                            <SharedIcon/>
                        </IconButton>
                    </CardContent>
                </Card>
            </div>
        )
    },
    args: {
        variant: 'elevated',
    },
    argTypes: {
        variant: variantControl,
    },
};


const SkipPreviousIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
         fill="currentColor" {...props}>
        <path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Z"/>
    </svg>
);

const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
         fill="currentColor" {...props}>
        <path d="M320-200v-560l440 280-440 280Z"/>
    </svg>
);

const SkipNextIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
         fill="currentColor" {...props}>
        <path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z"/>
    </svg>
);

export const CustomCard: Story = {
    render: () => (
        <div style={{display: 'grid', gap: '0.5rem', width: '530px'}}>
            <Card variant="elevated" disabledStates={true} >
                <CardContent className={'flex flex-row py-2 gap-6'}>
                    <div className={'flex flex-col items-center'}>
                        <CardMedia
                            className="!rounded-full w-60 h-60"
                            alt="Healthy food"
                            src="https://images.unsplash.com/photo-1563204424-2b6268a06a6c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </div>
                    <div className={'flex flex-col justify-center'}>
                        <CardContent className={'flex flex-col  justify-center gap-1 my-2'} disabledGutters>
                            <Typography variant={'body'} size={'md'} className={'font-bold'}>The awesome
                                song</Typography>
                            <Typography variant={'body'} size={'md'}>The Album</Typography>
                        </CardContent>
                        <CardContent className={'flex flex-col  justify-center gap-3 my-5'} disabledGutters>
                            <LinearProgress size={'sm'} value={30}/>
                            <div className={'flex flex-row justify-between'}>
                                <Typography variant={'body'} size={'sm'}>1:30</Typography>
                                <Typography variant={'body'} size={'sm'}>3:00</Typography>
                            </div>
                        </CardContent>
                        <CardContent className={'flex flex-row items-center justify-center gap-3 mb-5'} disabledGutters>
                            <IconButton color={'primary'} variant={'filled'}>
                                <SkipPreviousIcon className={'w-10 h-10'}/>
                            </IconButton>
                            <IconButton color={'primary'} variant={'filled'}>
                                <PlayIcon className={'w-16 h-16'}/>
                            </IconButton>
                            <IconButton color={'primary'} variant={'filled'}>
                                <SkipNextIcon className={'w-10 h-10'}/>
                            </IconButton>
                        </CardContent>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
