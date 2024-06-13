// .storybook/main.ts
import type { StorybookConfig } from '@storybook/nextjs';
import { Configuration } from 'webpack'; 
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (webpackConfig: Configuration) => {
    webpackConfig.plugins = webpackConfig.plugins || [];

    webpackConfig.plugins.push(new VanillaExtractPlugin());

    return webpackConfig;
  },
};

export default config;
