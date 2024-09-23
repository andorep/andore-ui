import React, { useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { CardProps } from "./Card.types";
import {
  CardBaseMapClassName,
  CardBaseStatesMapClassName,
  CardContentBaseClassName,
  CardContentBaseStatesClassName,
  CardDisabledMapClassName,
  CardDraggableClassName,
  CardIsDraggingClassName,
  DisabledStatesClassName,
} from "./Card.classes";
import {
  calculateDragImagePosition,
  generateDragImage,
  removeDragImageFromDocument,
} from "./Card.utils";

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, forwardedRef) => {
    const {
      children,
      className,
      variant = "elevated",
      onDragStart,
      onDragEnd,
      disabledStates = false,
      disabledDragImage = false,
      disabled = false,
      ...rest
    } = props;
    const [isDragging, setIsDragging] = React.useState(false);

    const cardVariantClassName = CardBaseMapClassName[variant];
    const dragClassName = props.draggable ? CardDraggableClassName : "";
    const draggingClassName = isDragging ? CardIsDraggingClassName : "";
    const enableStatesClassName = disabledStates ? DisabledStatesClassName : "";
    const statesClassName = disabledStates
      ? ""
      : CardBaseStatesMapClassName[variant];
    let classesRoot = twMerge(
      cardVariantClassName,
      draggingClassName,
      dragClassName,
      enableStatesClassName,
      statesClassName,
      className,
    );

    let contentStatesClassName = disabledStates
      ? ""
      : CardContentBaseStatesClassName;
    let classesContent = twMerge(
      CardContentBaseClassName,
      contentStatesClassName,
    );

    if (disabled) {
      classesRoot = CardDisabledMapClassName[variant];
    }

    const handleDragStart = useCallback(
      (event: React.DragEvent<HTMLDivElement>) => {
        setIsDragging(true);
        if (!disabledDragImage) {
          const dragImage = generateDragImage(event.currentTarget);
          if (dragImage) {
            const { x, y } = calculateDragImagePosition(event);
            event.dataTransfer.setDragImage(dragImage, x, y);
          }
        }
        // Remove the drag image
        if (onDragStart) {
          onDragStart(event);
        }
      },
      [onDragStart],
    );

    const handleDragEnd = useCallback(
      (event: React.DragEvent<HTMLDivElement>) => {
        setIsDragging(false);
        removeDragImageFromDocument();
        if (onDragEnd) {
          onDragEnd(event);
        }
      },
      [onDragEnd],
    );

    return (
      <div
        {...rest}
        ref={forwardedRef}
        className={classesRoot}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className={classesContent}>{children}</div>
      </div>
    );
  },
);

export default Card;
