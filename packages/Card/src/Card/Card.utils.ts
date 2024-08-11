import React from "react";
import {CardDraggableImageClassName, CardDraggableRootClassName} from "./Card.classes";

export const generateDragImage = (element: HTMLElement) => {
    if (!document) {
        return;
    }
    // Create a drag image based on the card content
    const dragImage = document.createElement('div');
    // Position the drag image off-screen
    dragImage.className = CardDraggableRootClassName;
    // dragImage width and height must a 10px more than the card
    dragImage.style.width = element.getBoundingClientRect().width + 16 * 2 + 'px';
    dragImage.style.height = element.getBoundingClientRect().height + 16 * 2 + 'px';
    // Copy the card into the drag image
    dragImage.innerHTML = element.outerHTML;
    // Add class to drag card
    dragImage.children[0].className += ` ${CardDraggableImageClassName}`;
    document.body.appendChild(dragImage);
    return dragImage;
}

export const calculateDragImagePosition = (event: React.DragEvent<HTMLDivElement>) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().left;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().top;
    return {x, y};
}

export const removeDragImageFromDocument = () => {
    if (!document) {
        return;
    }
    const dragImage = document.getElementsByClassName(CardDraggableRootClassName);
    if (dragImage) {
        dragImage[0].remove();
    }
}
