import React, {useId} from 'react';
import {twMerge} from 'tailwind-merge';
import {TextFieldProps} from './TextField.types';
import {
    TextFieldBaseClassName, TextFieldBaseDisabledClassName,
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
    TextFieldLabelClassName,
    TextFieldLeadingClassName, TextFieldLeadingFilledClassName, TextFieldLeadingOutlinedClassName,
    TextFieldOutlinedBaseClassName,
    TextFieldPrefixClassName,
    TextFieldPrefixFilledClassName,
    TextFieldPrefixOutlinedClassName,
    TextFieldSuffixClassName,
    TextFieldSuffixFilledClassName,
    TextFieldSuffixOutlinedClassName,
    TextFieldSupportTextClassName,
    TextFieldTrailingClassName, TextFieldTrailingFilledClassName, TextFieldTrailingOutlinedClassName
} from './TextField.classes';

const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>((props, forwardedRef) => {
    const {
        id,
        label,
        supportText,
        className,
        variant = 'filled',
        placeholder,
        leading,
        trailing,
        defaultValue,
        value,
        prefix,
        suffix,
        disabled,
        required,
        minLength,
        maxLength,
        readOnly,
        ...rest
    } = props;
    const inputId = id || useId();
    const labeledId = `${inputId}-label`;
    const supportTextId = `${inputId}-support-text`;

    const withPlaceholder = placeholder != null && placeholder != '' ? TextFieldBaseWithPlaceholderClassName : '';
    const variantClasses = variant === 'filled' ? TextFieldFilledBaseClassName : TextFieldOutlinedBaseClassName;
    const disabledClasses = disabled ? TextFieldBaseDisabledClassName : '';
    const classes = twMerge(TextFieldBaseClassName, variantClasses, withPlaceholder, disabledClasses, className);

    const inputRootVariantClasses = variant === 'filled' ? TextFieldInputRootFilledClassName : TextFieldInputRootOutlinedClassName;
    const inputRootClasses = twMerge(TextFieldInputRootClassName, inputRootVariantClasses);

    const inputStateVariantClasses = variant === 'filled' ? TextFieldInputStateFilledClassName : TextFieldInputStateOutlinedClassName;
    const inputStateClasses = twMerge(TextFieldInputStateClassName, inputStateVariantClasses);

    const inputVariantClasses = variant === 'filled' ? TextFieldInputFilledClassName : TextFieldInputOutlinedClassName;
    const inputClasses = twMerge(TextFieldInputClassName, inputVariantClasses);

    const labelClasses = twMerge(TextFieldLabelClassName);
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
        <div {...rest} ref={forwardedRef} className={classes}>
            <div className={inputRootClasses}>
                <div className={inputStateClasses}>
                    {leading && (<span className={leadingClasses}>{leading}</span>)}
                    {label && (
                        <label htmlFor={inputId} id={labeledId} className={labelClasses}>
                            {label}{required && (<span aria-hidden="true">*</span>)}
                        </label>
                    )}
                    {prefix && (<span className={prefixClasses}>{prefix}</span>)}
                    <input
                        type="text"
                        id={inputId}
                        aria-labelledby={`${labeledId} ${supportTextId}`}
                        defaultValue={defaultValue}
                        value={value}
                        placeholder={placeholder}
                        className={inputClasses}
                        disabled={disabled}
                        required={required}
                        minLength={minLength}
                        maxLength={maxLength}
                        readOnly={readOnly}
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
