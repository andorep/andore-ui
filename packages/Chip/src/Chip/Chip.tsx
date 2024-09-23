import React from "react";
import { ChipProps } from "./Chip.types";
import { twMerge } from "tailwind-merge";
import {
  ChipDeleteIconClassName,
  ChipEndIconClassName,
  ChipRootClassName,
  ChipRootClassNameMap,
  ChipRootSelectedClassName,
  ChipStartIconClassName,
  ChipStateClassName,
} from "./Chip.classes";

const DeleteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="currentColor"
    {...props}
  >
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </svg>
);

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="currentColor"
    {...props}
  >
    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
  </svg>
);

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>((props, ref) => {
  const {
    children,
    className,
    color = "primary",
    variant = "elevated",
    startIcon,
    endIcon,
    selected,
    selectedIcon = <CheckIcon />,
    deletable,
    onDelete,
    selectedIconDisabled,
    ...rest
  } = props;

  const selectedClasses = selected ? ChipRootSelectedClassName : "";
  const variantRootClasses = ChipRootClassNameMap[variant];
  const rootClasses = twMerge(
    ChipRootClassName,
    variantRootClasses,
    selectedClasses,
    className,
  );

  const stateClasses = twMerge(ChipStateClassName);

  const startIconClasses = twMerge(ChipStartIconClassName);

  const deleteIconClasses = onDelete ? ChipDeleteIconClassName : "";
  const endIconClasses = twMerge(ChipEndIconClassName, deleteIconClasses);

  let deleteIcon = endIcon;
  if (deletable && endIcon == null) {
    deleteIcon = <DeleteIcon />;
  }

  let startIconElement = startIcon;
  if (selected && selectedIcon && !selectedIconDisabled) {
    startIconElement = selectedIcon;
  }

  return (
    <button type={"button"} ref={ref} {...rest} className={rootClasses}>
      <span className={stateClasses}>
        {startIconElement && (
          <span className={startIconClasses}>{startIconElement}</span>
        )}
        {children}
        {deletable && (
          <button className={endIconClasses} onClick={onDelete}>
            {deleteIcon}
          </button>
        )}
        {!deletable && endIcon && (
          <span className={endIconClasses} onClick={onDelete}>
            {endIcon}
          </span>
        )}
      </span>
    </button>
  );
});

export default Chip;
