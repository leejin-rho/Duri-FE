import type { Meta, StoryFn } from '@storybook/react';

import ProgressBar from '.';

// type Story = StoryObj<typeof Button>;

/**
 * `Button` 컴포넌트의 스토리북 정의입니다.
 */
const meta: Meta<typeof ProgressBar> = {
  title: 'Components/common/ProgressBar',
  component: ProgressBar,
  parameters: {
    controls: { 
      include: ['current', 'total'],
    },
  },
};

export default meta;

const Template: StoryFn<typeof ProgressBar> = (args) => (
  <ProgressBar 
    {...args}
  />
);

/**
 * `DefaultButton`는 'Button' 컴포넌트의 기본 스토리입니다.
 */
export const Default = Template.bind({});
Default.args = {
  current: 50,
  total: 100,
};