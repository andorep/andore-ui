import colors from "tailwindcss/colors";

// create type from tailwind colors
export type TailwindColor = keyof typeof colors;

export type TailwindTonal = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

export const MaterialColorToTailwindColor: Record<number, TailwindTonal> = {
    99: '50',
    95: '100',
    90: '200',
    80: '300',
    70: '400',
    60: '500',
    50: '600',
    40: '700',
    30: '800',
    20: '900',
    10: '950'
}


export const getColorFromMaterialColor = (tailwindColor: TailwindColor, materialColor: number): string => {
    if (materialColor <= 0) {
        return colors.black;
    }
    if (materialColor >= 100) {
        return colors.white;
    }
    const color = colors[tailwindColor];
    const materialTranslateColor = MaterialColorToTailwindColor[materialColor];
    return color[materialTranslateColor];
}
