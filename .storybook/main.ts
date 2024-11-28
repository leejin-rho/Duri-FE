import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../apps/**/**/*.mdx',
    '../packages/ui/**/*.mdx',
    '../packages/utils/**/*.mdx',
    '../apps/**/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/ui/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/utils/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  previewHead: (head) => `
    ${head}
  `,
};
export default config;
