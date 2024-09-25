export const mapColorsToCssVariables = (colors = {}, parentKey = "") => {
    const output = {} as Record<string, unknown>;

    for (const [key, value] of Object.entries(colors)) {
        let newKey = key;
        if (key === "DEFAULT") {
            newKey = parentKey;
        }else{
            newKey = parentKey ? `${parentKey}-${key}` : key
        }

        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            // Recursively handle nested objects
            output[key] = mapColorsToCssVariables(value, newKey);
        } else {
            // Convert the value to a CSS variable format
            output[key] = `rgb(var(--aui-${newKey}))`;
        }
    }

    return output;
};

export const transformColorsToCssVariables = (input = {}, parentKey = "") => {
    let cssVariables = {}

    for (const [key, value] of Object.entries(input)) {
        let newKey = key;
        if (key === "DEFAULT") {
            newKey = parentKey;
        }else{
            newKey = parentKey ? `${parentKey}-${key}` : key
        }

        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            // Recursively handle nested objects
            cssVariables = {
                ...cssVariables,
                ...transformColorsToCssVariables(value, newKey)
            }
        } else {
            // Convert hex color to RGB
            const rgb = hexToRgb(value as string);
            if (rgb) {
                cssVariables ={
                    ...cssVariables,
                    [`--aui-${newKey}`]: rgb
                }
            }
        }
    }

    return cssVariables;
};

function hexToRgb(hex: string) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, "");

    // Parse the hex string
    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((x) => x + x)
            .join("");
    }

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r} ${g} ${b}`;
}
