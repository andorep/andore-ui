import React, {useId} from 'react';
import {twMerge} from 'tailwind-merge';
import {TextareaProps} from './Textarea.types';
import {
    TextareaBaseClassName,
    TextareaBaseDisabledClassName, TextareaBaseErrorClassName,
    TextareaBaseWithPlaceholderClassName,
    TextareaFilledBaseClassName,
    TextareaInputClassName,
    TextareaInputFilledClassName,
    TextareaInputOutlinedClassName,
    TextareaInputRootClassName,
    TextareaInputRootFilledClassName,
    TextareaInputRootOutlinedClassName,
    TextareaInputStateClassName,
    TextareaInputStateFilledClassName,
    TextareaInputStateOutlinedClassName,
    TextareaLabelClassName,
    TextareaOutlinedBaseClassName,
    TextareaSupportTextClassName,
} from './Textarea.classes';

const Textarea = React.forwardRef<HTMLDivElement, TextareaProps>((props, forwardedRef) => {
    const {
        id,
        label,
        supportText,
        className,
        variant = 'filled',
        onChange,
        placeholder = ' ',
        error,
        ...rest
    } = props;

    const autoId = useId();
    const inputId = id || autoId;
    const labeledId = `${inputId}-label`;
    const supportTextId = `${inputId}-support-text`;

    const placeholderValue = placeholder != null && placeholder != '' ? placeholder : ' ';

    const errorClasses = error ? TextareaBaseErrorClassName : '';
    const withPlaceholderClasses = TextareaBaseWithPlaceholderClassName;
    const variantClasses = variant === 'filled' ? TextareaFilledBaseClassName : TextareaOutlinedBaseClassName;
    const disabledClasses = props.disabled ? TextareaBaseDisabledClassName : '';
    const classes = twMerge(TextareaBaseClassName, variantClasses, withPlaceholderClasses, errorClasses, disabledClasses, className);

    const inputRootVariantClasses = variant === 'filled' ? TextareaInputRootFilledClassName : TextareaInputRootOutlinedClassName;
    const inputRootClasses = twMerge(TextareaInputRootClassName, inputRootVariantClasses);

    const inputStateVariantClasses = variant === 'filled' ? TextareaInputStateFilledClassName : TextareaInputStateOutlinedClassName;
    const inputStateClasses = twMerge(TextareaInputStateClassName, inputStateVariantClasses);

    const inputVariantClasses = variant === 'filled' ? TextareaInputFilledClassName : TextareaInputOutlinedClassName;
    const inputClasses = twMerge(TextareaInputClassName, inputVariantClasses);

    const labelClasses = twMerge(TextareaLabelClassName);
    const supportTextClasses = twMerge(TextareaSupportTextClassName);

    return (
        <div ref={forwardedRef} className={classes}>
            <div className={inputRootClasses}>
                <div className={inputStateClasses}>
                    {label && (
                        <label htmlFor={inputId} id={labeledId} className={labelClasses}>
                            {label}{props.required && (<span aria-hidden="true">*</span>)}
                        </label>
                    )}
                    <textarea
                        id={inputId}
                        aria-labelledby={`${labeledId} ${supportTextId}`}
                        className={inputClasses}
                        placeholder={placeholderValue}
                        onChange={onChange}
                        {...rest}
                    />
                </div>
            </div>
            {supportText && (
                <span id={supportTextId} className={supportTextClasses}>{supportText}</span>
            )}
        </div>
    );
});

export default Textarea;
