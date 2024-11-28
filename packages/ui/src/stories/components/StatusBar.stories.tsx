import type { Meta, StoryObj } from '@storybook/react';

import { StatusBar } from '../../components/StatusBar';

type Story = StoryObj<typeof StatusBar>;

/**
 * `StatusBar` 컴포넌트의 스토리북 정의입니다.
 */
const meta: Meta<typeof StatusBar> = {
  title: 'components/StatusBar',
  component: StatusBar,
  tags: ['autodocs'],
  argTypes: {
    current: {
      type: 'number',
    },
    total: {
      type: 'number',
    },
  }
};

export default meta;

/**
 * `DefaultStatusBar`는 `StatusBar` 컴포넌트의 기본 스토리입니다.
 */
export const DefaultStatusBar: Story = {
  args: {
    current: 1,
    total: 5,
  }
};