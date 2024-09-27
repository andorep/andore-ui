export const transformThemeColorIntoCssVariable = (name: string) => {
    let colorName = name;
    if (name.includes('default') || name.includes('DEFAULT')) {
        colorName = name.replace('.default', '');
        colorName = colorName.replace('.DEFAULT', '');
    }
    return `--aui-${colorName.replace('.', '-')}`;
}


export const transformHexToRgb = (hex: string) => {
    const hexColor = hex.replace('#', '');
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
    return `${r} ${g} ${b}`;
}
