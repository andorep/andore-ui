import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-styling-webpack",
        '@storybook/addon-a11y',
        '@storybook/addon-storysource',
        "@storybook/addon-themes"
    ],

    framework: {
        name: "@storybook/react-vite",
        options: {},
    },

    docs: {},

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};
export default config;
