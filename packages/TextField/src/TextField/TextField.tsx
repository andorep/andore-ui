import React, {useId} from 'react';
import {twMerge} from 'tailwind-merge';
import {TextFieldProps} from './TextField.types';
import {
    TextFieldBaseClassName,
    TextFieldBaseDisabledClassName, TextFieldBaseErrorClassName,
    TextFieldBaseWithPlaceholderClassName,
    TextFieldFilledBaseClassName,
    TextFieldInputClassName,
    TextFieldInputFilledClassName,
    TextFieldInputOutlinedClassName,
    TextFieldInputRootClassName,
    TextFieldInputRootFilledClassName,
    TextFieldInputRootOutlinedClassName,
    TextFieldInputStateClassName,
    TextFieldInputStateFilledClassName,
    TextFieldInputStateOutlinedClassName,
    TextFieldLabelClassName, TextFieldLabelFilledClassName, TextFieldLabelOutlinedClassName,
    TextFieldLeadingClassName,
    TextFieldLeadingFilledClassName,
    TextFieldLeadingOutlinedClassName,
    TextFieldOutlinedBaseClassName,
    TextFieldPrefixClassName,
    TextFieldPrefixFilledClassName,
    TextFieldPrefixOutlinedClassName,
    TextFieldSuffixClassName,
    TextFieldSuffixFilledClassName,
    TextFieldSuffixOutlinedClassName,
    TextFieldSupportTextClassName,
    TextFieldTrailingClassName,
    TextFieldTrailingFilledClassName,
    TextFieldTrailingOutlinedClassName
} from './TextField.classes';

const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>((props, forwardedRef) => {
    const {
        id,
        label,
        supportText,
        className,
        variant = 'filled',
        leading,
        trailing,
        prefix,
        suffix,
        onChange,
        placeholder = ' ',
        error,
        ...rest
    } = props;

    const inputId = id || useId();
    const labeledId = `${inputId}-label`;
    const supportTextId = `${inputId}-support-text`;

    const placeholderValue = placeholder != null && placeholder != '' ? placeholder : ' ';

    const errorClasses = error ? TextFieldBaseErrorClassName : '';
    const withPlaceholderClasses = TextFieldBaseWithPlaceholderClassName;
    const variantClasses = variant === 'filled' ? TextFieldFilledBaseClassName : TextFieldOutlinedBaseClassName;
    const disabledClasses = props.disabled ? TextFieldBaseDisabledClassName : '';
    const classes = twMerge(TextFieldBaseClassName, variantClasses, withPlaceholderClasses, errorClasses, disabledClasses, className);

    const inputRootVariantClasses = variant === 'filled' ? TextFieldInputRootFilledClassName : TextFieldInputRootOutlinedClassName;
    const inputRootClasses = twMerge(TextFieldInputRootClassName, inputRootVariantClasses);

    const inputStateVariantClasses = variant === 'filled' ? TextFieldInputStateFilledClassName : TextFieldInputStateOutlinedClassName;
    const inputStateClasses = twMerge(TextFieldInputStateClassName, inputStateVariantClasses);

    const inputVariantClasses = variant === 'filled' ? TextFieldInputFilledClassName : TextFieldInputOutlinedClassName;
    const inputClasses = twMerge(TextFieldInputClassName, inputVariantClasses);

    const labelVariantClasses = variant === 'filled' ? TextFieldLabelFilledClassName : TextFieldLabelOutlinedClassName;
    const labelClasses = twMerge(TextFieldLabelClassName, labelVariantClasses);

    const supportTextClasses = twMerge(TextFieldSupportTextClassName);

    const leadingVariantClasses = variant === 'filled' ? TextFieldLeadingFilledClassName : TextFieldLeadingOutlinedClassName;
    const leadingClasses = twMerge(TextFieldLeadingClassName, leadingVariantClasses);

    const trailingVariantClasses = variant === 'filled' ? TextFieldTrailingFilledClassName : TextFieldTrailingOutlinedClassName;
    const trailingClasses = twMerge(TextFieldTrailingClassName, trailingVariantClasses);

    const prefixVariantClasses = variant === 'filled' ? TextFieldPrefixFilledClassName : TextFieldPrefixOutlinedClassName;
    const prefixClasses = twMerge(TextFieldPrefixClassName, prefixVariantClasses);

    const suffixVariantClasses = variant === 'filled' ? TextFieldSuffixFilledClassName : TextFieldSuffixOutlinedClassName;
    const suffixClasses = twMerge(TextFieldSuffixClassName, suffixVariantClasses);


    return (
        <div ref={forwardedRef} className={classes}>
            <div className={inputRootClasses}>
                <div className={inputStateClasses}>
                    {leading && (<span className={leadingClasses}>{leading}</span>)}
                    {label && (
                        <label htmlFor={inputId} id={labeledId} className={labelClasses}>
                            {label}{props.required && (<span aria-hidden="true">*</span>)}
                        </label>
                    )}
                    {prefix && (<span className={prefixClasses}>{prefix}</span>)}
                    <input
                        type="text"
                        id={inputId}
                        aria-labelledby={`${labeledId} ${supportTextId}`}
                        className={inputClasses}
                        placeholder={placeholderValue}
                        {...rest}
                    />
                    {suffix && (<span className={suffixClasses}>{suffix}</span>)}
                    {trailing && (<span className={trailingClasses}>{trailing}</span>)}
                </div>
            </div>
            {supportText && (
                <span id={supportTextId} className={supportTextClasses}>{supportText}</span>
            )}
        </div>
    );
});

export default TextField;
