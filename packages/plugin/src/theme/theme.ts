import {TailwindColor, Theme} from "./theme.types";
import {motion} from "./motion";
import colors from "tailwindcss/colors";
import {getColorFromMaterialColor} from "../utils/colors.utils";

const primary = 'pink' as TailwindColor;

const secondary = 'cyan' as TailwindColor;

const info = 'blue' as TailwindColor;

const success = 'green' as TailwindColor;

const warning = 'yellow' as TailwindColor;

const error = 'red' as TailwindColor;

/** @type {import('tailwindcss').Config} */
export const theme: Theme = {
    fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
    },
    boxShadow: {
        // material design 3 shadow
        // Light elevation 1
        sm: " 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        // Light elevation 2
        DEFAULT:
            "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
        // Light elevation 3
        md: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
        // Light elevation 4
        lg: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
        // Light elevation 5
        xl: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
        none: "none",
        dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
        // material design 3 shadow
        // Dark elevation 1
        "dark-sm":
            " 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
        // Dark elevation 2
        "dark-DEFAULT":
            "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
        // Dark elevation 3
        "dark-md":
            "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
        // Dark elevation 4
        "dark-lg":
            "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
        // Dark elevation 5
        "dark-xl":
            "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
        "dark-none": "none",
    },
    transitionTimingFunction: {
        emphasized: motion.easing.emphasized.timingFunction,
        emphasizedAccelerate: motion.easing.emphasizedAccelerate.timingFunction,
        emphasizedDecelerate: motion.easing.emphasizedDecelerate.timingFunction,
        standard: motion.easing.standard.timingFunction,
        standardAccelerate: motion.easing.standardAccelerate.timingFunction,
        standardDecelerate: motion.easing.standardDecelerate.timingFunction,
    },
    transitionDuration: {
        short1: motion.duration.short1,
        short2: motion.duration.short2,
        short3: motion.duration.short3,
        short4: motion.duration.short4,
        medium1: motion.duration.medium1,
        medium2: motion.duration.medium2,
        medium3: motion.duration.medium3,
        medium4: motion.duration.medium4,
        long1: motion.duration.long1,
        long2: motion.duration.long2,
        long3: motion.duration.long3,
        long4: motion.duration.long4,
        extraLong1: motion.duration.extraLong1,
        extraLong2: motion.duration.extraLong2,
        extraLong3: motion.duration.extraLong3,
        extraLong4: motion.duration.extraLong4,
    },
    borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.75rem",
    },
    animation: {
        "accordion-open": `accordion-open ${motion.duration.medium2} ${motion.easing.emphasized.timingFunction}`,
        "accordion-closed": `accordion-closed ${motion.duration.medium2} ${motion.easing.emphasized.timingFunction}`,
        overlayShow: `overlayShow ${motion.duration.short3} ${motion.easing.emphasized.timingFunction}`,
        contentShow: `contentShow ${motion.duration.short3} ${motion.easing.emphasized.timingFunction}`,
        slideDownAndFade: `slideDownAndFade ${motion.duration.medium4} ${motion.easing.emphasized.timingFunction}`,
        slideLeftAndFade: `slideLeftAndFade ${motion.duration.medium4} ${motion.easing.emphasized.timingFunction}`,
        slideUpAndFade: `slideUpAndFade ${motion.duration.medium4} ${motion.easing.emphasized.timingFunction}`,
        slideRightAndFade: `slideRightAndFade ${motion.duration.medium4} ${motion.easing.emphasized.timingFunction}`,
        progressIndeterminate: `progressIndeterminate ${motion.duration.extraLong4} ${motion.easing.emphasizedAccelerate.timingFunction} infinite`,
    },
    keyframes: {
        overlayShow: {
            from: {opacity: "0"},
            to: {opacity: "1"},
        },
        contentShow: {
            from: {opacity: "0", transform: "translate(-50%, -48%) scale(0.96)"},
            to: {opacity: "1", transform: "translate(-50%, -50%) scale(1)"},
        },
        "accordion-open": {
            from: {height: "0"},
            to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-closed": {
            from: {height: "var(--radix-accordion-content-height)"},
            to: {height: "0"},
        },
        slideDownAndFade: {
            from: {opacity: '0', transform: 'translateY(-2px)'},
            to: {opacity: '1', transform: 'translateY(0)'},
        },
        slideLeftAndFade: {
            from: {opacity: '0', transform: 'translateX(2px)'},
            to: {opacity: '1', transform: 'translateX(0)'},
        },
        slideUpAndFade: {
            from: {opacity: '0', transform: 'translateY(2px)'},
            to: {opacity: '1', transform: 'translateY(0)'},
        },
        slideRightAndFade: {
            from: {opacity: '0', transform: 'translateX(-2px)'},
            to: {opacity: '1', transform: 'translateX(0)'},
        },
        progressIndeterminate: {
            "0%": {transform: "translateX(-100%)"},
            "100%": {transform: "translateX(150%)"},
        }
    },
    colors: {
        gray: colors.gray,
        white: colors.white,
        black: colors.black,
        outline: {
            DEFAULT: getColorFromMaterialColor('neutral', 50),
            variant: getColorFromMaterialColor('neutral', 80),
            dark: getColorFromMaterialColor('neutral', 60),
            "dark-variant": getColorFromMaterialColor('neutral', 30),
        },
        surface: {
            dim: getColorFromMaterialColor('stone', 90),
            default: getColorFromMaterialColor('stone', 95),
            bright: getColorFromMaterialColor('stone', 99),
            "container-lowest": getColorFromMaterialColor('slate', 100),
            "container-low": getColorFromMaterialColor('slate', 99),
            container: getColorFromMaterialColor('slate', 95),
            "container-high": getColorFromMaterialColor('slate', 90),
            "container-highest": getColorFromMaterialColor('slate', 80),
            text: getColorFromMaterialColor('slate', 10),
            "text-variant": getColorFromMaterialColor('slate', 30),
            scrim: getColorFromMaterialColor('slate', 0),
            "dark-dim": getColorFromMaterialColor('stone', 30),
            "dark-DEFAULT": getColorFromMaterialColor('stone', 20),
            "dark-bright": getColorFromMaterialColor('stone', 10),
            "dark-container-lowest": getColorFromMaterialColor('neutral', 10),
            "dark-container-low": getColorFromMaterialColor('neutral', 20),
            "dark-container": getColorFromMaterialColor('neutral', 30),
            "dark-container-high": getColorFromMaterialColor('neutral', 40),
            "dark-container-highest": getColorFromMaterialColor('neutral', 50),
            "dark-text": getColorFromMaterialColor('neutral', 90),
            "dark-text-variant":getColorFromMaterialColor('neutral', 80),
            "dark-scrim": getColorFromMaterialColor('neutral', 0),
        },
        primary: {
            DEFAULT: getColorFromMaterialColor(primary, 40),
            text: getColorFromMaterialColor(primary, 100),
            container: getColorFromMaterialColor(primary, 90),
            "container-text": getColorFromMaterialColor(primary, 10),
            "dark-DEFAULT": getColorFromMaterialColor(primary, 80),
            "dark-text": getColorFromMaterialColor(primary, 20),
            "dark-container": getColorFromMaterialColor(primary, 30),
            "dark-container-text": getColorFromMaterialColor(primary, 90),
        },
        secondary: {
            DEFAULT: getColorFromMaterialColor(secondary, 40),
            text: getColorFromMaterialColor(secondary, 100),
            container: getColorFromMaterialColor(secondary, 90),
            "container-text": getColorFromMaterialColor(secondary, 10),
            "dark-DEFAULT": getColorFromMaterialColor(secondary, 80),
            "dark-text": getColorFromMaterialColor(secondary, 20),
            "dark-container": getColorFromMaterialColor(secondary, 30),
            "dark-container-text": getColorFromMaterialColor(secondary, 90),
        },
        info: {
            DEFAULT: getColorFromMaterialColor(info, 40),
            text: getColorFromMaterialColor(info, 100),
            container: getColorFromMaterialColor(info, 90),
            "container-text": getColorFromMaterialColor(info, 10),
            "dark-DEFAULT": getColorFromMaterialColor(info, 80),
            "dark-text": getColorFromMaterialColor(info, 20),
            "dark-container": getColorFromMaterialColor(info, 30),
            "dark-container-text": getColorFromMaterialColor(info, 90),
        },
        success: {
            DEFAULT: getColorFromMaterialColor(success, 40),
            text: getColorFromMaterialColor(success, 100),
            container: getColorFromMaterialColor(success, 90),
            "container-text": getColorFromMaterialColor(success, 10),
            "dark-DEFAULT": getColorFromMaterialColor(success, 80),
            "dark-text": getColorFromMaterialColor(success, 20),
            "dark-container": getColorFromMaterialColor(success, 30),
            "dark-container-text": getColorFromMaterialColor(success, 90),
        },
        warning: {
            DEFAULT: getColorFromMaterialColor(warning, 40),
            text: getColorFromMaterialColor(warning, 100),
            container: getColorFromMaterialColor(warning, 90),
            "container-text": getColorFromMaterialColor(warning, 10),
            "dark-DEFAULT": getColorFromMaterialColor(warning, 80),
            "dark-text": getColorFromMaterialColor(warning, 20),
            "dark-container": getColorFromMaterialColor(warning, 30),
            "dark-container-text": getColorFromMaterialColor(warning, 90),
        },
        error: {
            DEFAULT: getColorFromMaterialColor(error, 40),
            text: getColorFromMaterialColor(error, 100),
            container: getColorFromMaterialColor(error, 90),
            "container-text": getColorFromMaterialColor(error, 10),
            "dark-DEFAULT": getColorFromMaterialColor(error, 80),
            "dark-text": getColorFromMaterialColor(error, 20),
            "dark-container": getColorFromMaterialColor(error, 30),
            "dark-container-text": getColorFromMaterialColor(error, 90),
        },
    },
    transitionProperty: {
        'colorsShadow': 'color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow',
    }
};
