import {Theme} from "./theme.types.ts";
import {motion} from "./motion.ts";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export const theme: Theme = {
    fontFamily: {
        sans: ["Roboto", "sans-serif"],
    },
    fontSize: {
        // label small
        xs: "0.6875rem",
        // Body small
        // Label medium
        sm: "0.75rem",
        // Body medium
        // Label large
        base: "0.875rem",
        // Body large
        lg: "1rem",
        // Title small
        xl: "0.875rem",
        // Title medium
        "2xl": "1rem",
        // Title large
        "3xl": "1.375rem",
        // Headline small
        "4xl": "1.5rem",
        // Headline medium
        "5xl": "1.75rem",
        // Headline large
        "6xl": "2rem",
        // Display small
        "7xl": "2.25rem",
        // Display medium
        "8xl": "2.8125rem",
        // Display large
        "9xl": "3.5625rem",
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
        DEFAULT: "1.75rem",
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
            DEFAULT: colors.gray[200],
            variant: colors.gray[400],
            dark: colors.gray[700],
            "dark-variant": colors.gray[500],
        },
        surface: {
            dim: colors.gray[50],
            default: colors.gray[100],
            bright: colors.gray[200],
            text: colors.gray[800],
            "text-variant": colors.gray[500],
            "text-disabled": colors.gray[400],
            "container-lowest": colors.white,
            "container-low": colors.gray[100],
            container: colors.gray[200],
            "container-high": colors.gray[300],
            "container-highest": colors.gray[400],
            disabled: colors.gray[900],
            scrim: "rgba(0, 0, 0, 0.5)",
            "dark-dim": colors.gray[950],
            "dark-default": colors.neutral[900],
            "dark-bright": colors.gray[800],
            "dark-container-lowest": colors.neutral[800],
            "dark-container-low": colors.neutral[700],
            "dark-container": colors.neutral[600],
            "dark-container-high": colors.neutral[500],
            "dark-container-highest": colors.neutral[400],
            "dark-disabled": colors.gray[200],
            "dark-scrim": "rgba(0, 0, 0, 0.5)",
            "dark-text": colors.stone[300],
            "dark-text-variant": colors.gray[400],
            "dark-text-disabled": colors.gray[200],
        },
        primary: {
            darker: colors.pink[800],
            DEFAULT: colors.pink[600],
            lighter: colors.pink[400],
            container: colors.pink[200],
            text: colors.white,
            "container-text": colors.gray[800],
            "dark-darker": colors.pink[800],
            "dark-DEFAULT": colors.pink[700],
            "dark-lighter": colors.pink[600],
            "dark-container": colors.pink[500],
            "dark-text": colors.white,
            "dark-container-text": colors.white,
        },
        secondary: {
            darker: colors.orange[800],
            DEFAULT: colors.orange[600],
            lighter: colors.orange[400],
            container: colors.orange[200],
            text: colors.white,
            "container-text": colors.gray[800],
            "dark-darker": colors.teal[800],
            "dark-DEFAULT": colors.teal[600],
            "dark-lighter": colors.teal[400],
            "dark-container": colors.teal[100],
            "dark-text": colors.white,
            "dark-container-text": colors.white,
        },
        info: {
            darker: colors.blue[800],
            DEFAULT: colors.blue[600],
            lighter: colors.blue[400],
            container: colors.blue[200],
            text: colors.white,
            "container-text": colors.white,
            "dark-darker": colors.blue[800],
            "dark-DEFAULT": colors.blue[600],
            "dark-lighter": colors.blue[400],
            "dark-container": colors.blue[100],
            "dark-text": colors.white,
            "dark-container-text": colors.white,
        },
        success: {
            darker: colors.green[800],
            DEFAULT: colors.green[600],
            lighter: colors.green[400],
            container: colors.green[200],
            text: colors.white,
            "container-text": colors.white,
            "dark-darker": colors.green[800],
            "dark-DEFAULT": colors.green[600],
            "dark-lighter": colors.green[400],
            "dark-container": colors.green[100],
            "dark-text": colors.white,
            "dark-container-text": colors.white,
        },
        warning: {
            darker: colors.yellow[800],
            DEFAULT: colors.yellow[600],
            lighter: colors.yellow[400],
            container: colors.yellow[200],
            text: colors.white,
            "container-text": colors.white,
            "dark-darker": colors.yellow[800],
            "dark-DEFAULT": colors.yellow[600],
            "dark-lighter": colors.yellow[400],
            "dark-container": colors.yellow[100],
            "dark-text": colors.white,
            "dark-container-text": colors.white,
        },
        error: {
            darker: colors.red[800],
            DEFAULT: colors.red[600],
            lighter: colors.red[400],
            container: colors.red[200],
            text: colors.white,
            "container-text": colors.white,
            "dark-darker": colors.red[800],
            "dark-DEFAULT": colors.red[600],
            "dark-lighter": colors.red[400],
            "dark-container": colors.red[100],
            "dark-text": colors.white,
            "dark-container-text": colors.white,
        },
    },
};
