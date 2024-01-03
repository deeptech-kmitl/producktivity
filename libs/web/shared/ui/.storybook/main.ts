import type { StorybookConfig } from 'storybook-framework-qwik';
import { withNx } from 'qwik-nx/storybook';
import { mergeConfig, type InlineConfig } from 'vite';
import viteConfig from './../vite.config';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: 'storybook-framework-qwik',
  },
  core: {
    renderer: 'storybook-framework-qwik',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  viteFinal: async (config: InlineConfig) => {
    const updatedConfig = mergeConfig(config, viteConfig);
    return withNx(updatedConfig);
  },
};

export default config;
