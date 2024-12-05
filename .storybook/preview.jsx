import React from 'react';
import { Global } from '@emotion/react';
import { globalStyle } from '../packages/ui/src/styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../packages/ui/src/styles/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    storySort: {
      order: ['docs', 'styles', 'components'],
    },
    backgrounds: {
      values: [
        { name: 'Dark', value: '#000000' },
        { name: 'Light', value: '#FFFFFF' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
