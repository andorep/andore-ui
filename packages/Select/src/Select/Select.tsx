import React, {useId} from 'react';
import { twMerge } from 'tailwind-merge';
import { SelectProps } from './Select.types';
import {
    SelectBaseClassName,
    SelectBaseDisabledClassName, SelectBaseErrorClassName,
    SelectBaseWithPlaceholderClassName,
    SelectFilledBaseClassName,
    SelectInputClassName,
    SelectInputFilledClassName,
    SelectInputOutlinedClassName,
    SelectInputRootClassName,
    SelectInputRootFilledClassName,
    SelectInputRootOutlinedClassName,
    SelectInputStateClassName,
    SelectInputStateFilledClassName,
    SelectInputStateOutlinedClassName,
    SelectLabelClassName, SelectLabelFilledClassName, SelectLabelOutlinedClassName,
    SelectOutlinedBaseClassName,
    SelectSupportTextClassName,
    SelectTrailingClassName,
    SelectTrailingFilledClassName,
    SelectTrailingOutlinedClassName
} from './Select.classes';

const Select = React.forwardRef<HTMLDivElement, SelectProps>((props, forwardedRef) => {
    const {
        id,
        label,
        supportText,
        className,
        variant = 'filled',
        trailing,
        placeholder = ' ',
        error,
        children,
        ...rest
    } = props;

    const autoId = useId();
    const selectId = id || autoId;
    const labeledId = `${selectId}-label`;
    const supportTextId = `${selectId}-support-text`;

    const placeholderValue = placeholder != null && placeholder != '' ? placeholder : ' ';

    const errorClasses = error ? SelectBaseErrorClassName : '';
    const withPlaceholderClasses = SelectBaseWithPlaceholderClassName;
    const variantClasses = variant === 'filled' ? SelectFilledBaseClassName : SelectOutlinedBaseClassName;
    const disabledClasses = props.disabled ? SelectBaseDisabledClassName : '';
    const classes = twMerge(SelectBaseClassName, variantClasses, withPlaceholderClasses, errorClasses, disabledClasses, className);

    const selectRootVariantClasses = variant === 'filled' ? SelectInputRootFilledClassName : SelectInputRootOutlinedClassName;
    const selectRootClasses = twMerge(SelectInputRootClassName, selectRootVariantClasses);

    const selectStateVariantClasses = variant === 'filled' ? SelectInputStateFilledClassName : SelectInputStateOutlinedClassName;
    const selectStateClasses = twMerge(SelectInputStateClassName, selectStateVariantClasses);

    const selectVariantClasses = variant === 'filled' ? SelectInputFilledClassName : SelectInputOutlinedClassName;
    const selectClasses = twMerge(SelectInputClassName, selectVariantClasses);

    const labelVariantClasses = variant === 'filled' ? SelectLabelFilledClassName : SelectLabelOutlinedClassName;
    const labelClasses = twMerge(SelectLabelClassName, labelVariantClasses);

    const supportTextClasses = twMerge(SelectSupportTextClassName);

    const trailingVariantClasses = variant === 'filled' ? SelectTrailingFilledClassName : SelectTrailingOutlinedClassName;
    const trailingClasses = twMerge(SelectTrailingClassName, trailingVariantClasses);

    return (
        <div ref={forwardedRef} className={classes}>
            <div className={selectRootClasses}>
                <div className={selectStateClasses}>
                    {label && (
                        <label htmlFor={selectId} id={labeledId} className={labelClasses}>
                            {label}{props.required && (<span aria-hidden="true">*</span>)}
                        </label>
                    )}
                    <select
                        id={selectId}
                        aria-labelledby={`${labeledId} ${supportTextId}`}
                        className={selectClasses}
                        {...rest}
                    >
                        {placeholder && (
                            <option disabled value={''}>{placeholderValue}</option>
                        )}
                        {children}
                    </select>
                    {trailing && (<span className={trailingClasses}>{trailing}</span>)}
                </div>
            </div>
            {supportText && (
                <span id={supportTextId} className={supportTextClasses}>{supportText}</span>
            )}
        </div>
    );
});

export default Select;
