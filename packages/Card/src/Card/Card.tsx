import React, {useCallback} from 'react';
import {twMerge} from 'tailwind-merge';
import {CardProps} from './Card.types';
import {
    CardBaseMapClassName,
    CardDisabledMapClassName,
    CardDraggableClassName,
    CardIsDraggingClassName,
} from './Card.classes';
import {
    calculateDragImagePosition,
    generateDragImage,
    removeDragImageFromDocument
} from "./Card.utils";

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, forwardedRef) => {
        const {
            children,
            className,
            variant = 'elevated',
            onDragStart,
            onDragEnd,
            disabledDragImage,
            disabled,
            ...rest
        } = props;
        const [isDragging, setIsDragging] = React.useState(false);

        const cardVariantClassName = CardBaseMapClassName[variant];
        const dragClassName = props.draggable ? CardDraggableClassName : '';
        const draggingClassName = isDragging ? CardIsDraggingClassName : '';
        let classesRoot = twMerge(cardVariantClassName, draggingClassName, dragClassName, className);

        if (disabled) {
            classesRoot = CardDisabledMapClassName[variant];
        }

        const handleDragStart = useCallback((event: React.DragEvent<HTMLDivElement>) => {
            setIsDragging(true);
            if (!disabledDragImage) {
                const dragImage = generateDragImage(event.currentTarget);
                if (dragImage) {
                    const {x, y} = calculateDragImagePosition(event);
                    event.dataTransfer.setDragImage(dragImage, x, y);
                }
            }
            // Remove the drag image
            if (onDragStart) {
                onDragStart(event);
            }
        }, [onDragStart]);

        const handleDragEnd = useCallback((event: React.DragEvent<HTMLDivElement>) => {
            setIsDragging(false);
            removeDragImageFromDocument();
            if (onDragEnd) {
                onDragEnd(event);
            }
        }, [onDragEnd]);

        return (
            <div
                {...rest} ref={forwardedRef}
                className={classesRoot}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                {children}
            </div>
        );
    }
);

export default Card;
