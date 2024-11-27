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
};

export default preview;
