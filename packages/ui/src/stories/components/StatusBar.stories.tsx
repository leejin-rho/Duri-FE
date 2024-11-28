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
    mode: {
      type: 'select',
      options: ['onboarding', 'main'],
    },
  }
};

export default meta;

/**
 * `OnboardingStatusBar`는 `StatusBar` 컴포넌트의 온보딩 스토리입니다.
 */
export const OnboardingStatusBar: Story = {
  args: {
    current: 2,
    total: 5,
    mode: 'onboarding',
  }
};

/**
 * `MainStatusBar`는 `StatusBar` 컴포넌트의 메인홈 스토리입니다.
 */
export const MainStatusBar: Story = {
  args: {
    current: 2,
    total: 5,
    mode: 'main',
  }
};