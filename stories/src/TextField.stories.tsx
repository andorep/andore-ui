import type {Meta, StoryObj} from "@storybook/react";
import {TextField, TextFieldVariant} from "@material-tailwind-ui/text-field";

const variantControl = {
    control: 'radio' as const,
    options: ['filled', 'outlined'] as TextFieldVariant[],
}

const disabledControl = {
    control: 'boolean' as const,
}

const readOnlyControl = {
    control: 'boolean' as const,
}

const meta: Meta<typeof TextField> = {
    component: TextField,
};
export default meta;

type Story = StoryObj<typeof TextField>;

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path
            d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
    </svg>
);

const CancelIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path
            d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </svg>
);

export const Default: Story = {
    render: ({variant, disabled, readOnly}) => (
        <form className={'flex flex-col gap-2 w-[400px]'}>
            <TextField variant={variant} disabled={disabled} readOnly={readOnly}/>
            <TextField variant={variant} disabled={disabled} readOnly={readOnly} placeholder={'Nice placeholder!'}/>
            <TextField variant={variant} disabled={disabled} readOnly={readOnly} label={'Label'} supportText={'Support text'}/>
            <TextField variant={variant} disabled={disabled} readOnly={readOnly} label={'Label'} supportText={'Support text'} placeholder={'Nice placeholder!'}/>
            <TextField variant={variant} disabled={disabled} readOnly={readOnly} label={'Label'} supportText={'Support text'} placeholder={'Nice placeholder!'}/>
            <TextField variant={variant} disabled={disabled} readOnly={readOnly} label={'Label'} supportText={'Support text'} placeholder={'Nice placeholder!'}
                       leading={<SearchIcon/>}/>
            <TextField required variant={variant} disabled={disabled} readOnly={readOnly} label={'Label'} supportText={'Support text'} placeholder={'Nice placeholder!'}
                       trailing={<CancelIcon/>}/>
            <TextField variant={variant} disabled={disabled} readOnly={readOnly} label={'Label'} supportText={'Support text'} placeholder={'Nice placeholder!'}
                       leading={<SearchIcon/>} trailing={<CancelIcon/>}/>
            <TextField variant={variant} disabled={disabled} readOnly={readOnly} label={'Label'} supportText={'Support text'} placeholder={'Nice placeholder!'}
                       defaultValue={'1,000'}
                       prefix={'$'}/>
            <TextField variant={variant} disabled={disabled} readOnly={readOnly} label={'Label'} supportText={'Support text'} placeholder={'Nice placeholder!'}
                       defaultValue={'1,000'}
                       suffix={'kg'}/>
        </form>
    ),
    args: {
        variant: 'filled',
        disabled: true,
        readOnly: true,
    },
    argTypes: {
        variant: variantControl,
        disabled: disabledControl,
        readOnly: readOnlyControl,
    }
};
