import React, { useId } from "react";
import { twMerge } from "tailwind-merge";
import { SearchProps } from "./Search.types";
import {
  SearchBaseClassName,
  SearchBaseDisabledClassName,
  SearchBaseErrorClassName,
  SearchBaseSizeClassNameMap,
  SearchBaseWithPlaceholderClassName,
  SearchFilledBaseClassName,
  SearchInputClassName,
  SearchInputFilledClassName,
  SearchInputOutlinedClassName,
  SearchInputRootClassName,
  SearchInputRootFilledClassName,
  SearchInputRootOutlinedClassName,
  SearchInputStateClassName,
  SearchInputStateFilledClassName,
  SearchInputStateOutlinedClassName,
  SearchLeadingClassName,
  SearchLeadingFilledClassName,
  SearchLeadingOutlinedClassName,
  SearchOutlinedBaseClassName,
  SearchTrailingClassName,
  SearchTrailingFilledClassName,
  SearchTrailingOutlinedClassName,
} from "./Search.classes";

const Search = React.forwardRef<HTMLDivElement, SearchProps>(
  (props, forwardedRef) => {
    const {
      id,
      className,
      variant = "filled",
      leading,
      trailing,
      placeholder = " ",
      error,
      size = "md",
      ...rest
    } = props;

    const autoId = useId();
    const inputId = id || autoId;
    const labeledId = `${inputId}-label`;
    const supportTextId = `${inputId}-support-text`;

    const placeholderValue =
      placeholder != null && placeholder != "" ? placeholder : " ";

    const sizeClasses = SearchBaseSizeClassNameMap[size];
    const errorClasses = error ? SearchBaseErrorClassName : "";
    const withPlaceholderClasses = SearchBaseWithPlaceholderClassName;
    const variantClasses =
      variant === "filled"
        ? SearchFilledBaseClassName
        : SearchOutlinedBaseClassName;
    const disabledClasses = props.disabled ? SearchBaseDisabledClassName : "";
    const classes = twMerge(
      SearchBaseClassName,
      variantClasses,
      withPlaceholderClasses,
      errorClasses,
      disabledClasses,
      sizeClasses,
      className,
    );

    const inputRootVariantClasses =
      variant === "filled"
        ? SearchInputRootFilledClassName
        : SearchInputRootOutlinedClassName;
    const inputRootClasses = twMerge(
      SearchInputRootClassName,
      inputRootVariantClasses,
    );

    const inputStateVariantClasses =
      variant === "filled"
        ? SearchInputStateFilledClassName
        : SearchInputStateOutlinedClassName;
    const inputStateClasses = twMerge(
      SearchInputStateClassName,
      inputStateVariantClasses,
    );

    const inputVariantClasses =
      variant === "filled"
        ? SearchInputFilledClassName
        : SearchInputOutlinedClassName;
    const inputClasses = twMerge(SearchInputClassName, inputVariantClasses);

    const leadingVariantClasses =
      variant === "filled"
        ? SearchLeadingFilledClassName
        : SearchLeadingOutlinedClassName;
    const leadingClasses = twMerge(
      SearchLeadingClassName,
      leadingVariantClasses,
    );

    const trailingVariantClasses =
      variant === "filled"
        ? SearchTrailingFilledClassName
        : SearchTrailingOutlinedClassName;
    const trailingClasses = twMerge(
      SearchTrailingClassName,
      trailingVariantClasses,
    );

    return (
      <div ref={forwardedRef} className={classes}>
        <div className={inputRootClasses}>
          <div className={inputStateClasses}>
            {leading && <span className={leadingClasses}>{leading}</span>}
            <input
              type="text"
              id={inputId}
              aria-labelledby={`${labeledId} ${supportTextId}`}
              className={inputClasses}
              placeholder={placeholderValue}
              {...rest}
            />
            {trailing && <span className={trailingClasses}>{trailing}</span>}
          </div>
        </div>
      </div>
    );
  },
);

export default Search;
