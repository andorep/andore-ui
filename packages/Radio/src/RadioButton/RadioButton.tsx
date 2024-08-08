import React from 'react';
import {RadioGroupItem as RadixRadioButton} from '@radix-ui/react-radio-group';
import {twMerge} from 'tailwind-merge';
import {RadioButtonProps} from './RadioButton.types';
import {
    RadioButtonBaseClassName,
    RadioButtonCheckedIconMapClassName,
    RadioButtonButtonMapClassName,
    RadioButtonLabelClassName,
    RadioButtonUncheckedIconMapClassName,
    RadioButtonUncheckedDisabledIconClassName,
    RadioButtonCheckedDisabledIconClassName,
    RadioButtonButtonDisabledClassName,
    RadioButtonLabelDisabledClassName,
    RadioButtonIconSizeMapClassName
} from './RadioButton.classes';
import RadioButtonCheckedIcon from "./RadioButtonCheckedIcon";
import RadioButtonUncheckedIcon from "./RadioButtonUcheckedIcon";

const RadioButton = React.forwardRef<HTMLButtonElement, RadioButtonProps>((props, forwardedRef) => {
    const {children, className, id, color = 'primary', size = 'md', disabled, ...rest} = props;

    const classes = twMerge(RadioButtonBaseClassName, className);

    const classesButtonIconClasses = RadioButtonIconSizeMapClassName[size];

    const classesButtonCheckedIconColor = RadioButtonCheckedIconMapClassName[color];
    const classesButtonCheckedIcon = twMerge(
        disabled ? RadioButtonCheckedDisabledIconClassName : classesButtonCheckedIconColor,
        classesButtonIconClasses
    );

    const classesButtonUncheckedIconColor = RadioButtonUncheckedIconMapClassName[color];
    const classesButtonUncheckedIcon = twMerge(
        disabled ? RadioButtonUncheckedDisabledIconClassName : classesButtonUncheckedIconColor,
        classesButtonIconClasses
    );

    const classesButtonColor = RadioButtonButtonMapClassName[color];
    const classesButton = disabled ? RadioButtonButtonDisabledClassName : twMerge(classesButtonColor);

    const classesLabel = disabled ? RadioButtonLabelDisabledClassName : twMerge(RadioButtonLabelClassName);

    return (
        <div className={classes}>
            <RadixRadioButton {...rest} ref={forwardedRef} className={classesButton} id={id} disabled={disabled}>
                <RadioButtonUncheckedIcon className={classesButtonUncheckedIcon}/>
                <RadioButtonCheckedIcon className={classesButtonCheckedIcon}/>
            </RadixRadioButton>
            <label className={classesLabel} htmlFor={id}>{children}</label>
        </div>
    );
});

export default RadioButton;
