import React from "react";
import { twMerge } from "tailwind-merge";
import { ListItemProps } from "./ListItem.types";
import {
  ListItemBaseClassName,
  ListItemBaseClickableClassName,
  ListItemStateActionEffectClassName,
  ListItemStateClassName,
} from "./ListItem.classes";

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (props, forwardedRef) => {
    const { children, className, onClick, ...rest } = props;
    const clickableClasses = onClick ? ListItemBaseClickableClassName : "";
    const actionEffectClasses = onClick
      ? ListItemStateActionEffectClassName
      : "";
    const classes = twMerge(
      ListItemBaseClassName,
      clickableClasses,
      ListItemStateClassName,
      actionEffectClasses,
      className,
    );
    return (
      <li {...rest} ref={forwardedRef} className={classes} onClick={onClick}>
        {children}
      </li>
    );
  },
);

export default ListItem;
