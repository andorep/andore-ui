import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    core: {
        builder: '@storybook/builder-vite',
    },
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
};
export default config;
