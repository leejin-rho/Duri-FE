import { ProfileImage } from '@duri-fe/ui';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ProfileImage>;

/**
 * `Header` 컴포넌트의 스토리북 정의입니다.
 */
const meta: Meta<typeof ProfileImage> = {
  title: 'components/ProfileImage',
  component: ProfileImage,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    borderRadius: { control: 'number' },
    src: { control: 'text' },
    iconSize: { control: 'number' },
  },
};

export default meta;

/**
 * `DefaultProfile`는 `ProfileImage` 컴포넌트의 기본 스토리입니다.
 */
export const DefaultProfile: Story = {
  args: {
    width: 64,
    height: 64,
    borderRadius: 20,
    iconSize: 52,
  }
};

/**
 * `CustomProfile`는 `ProfileImage` 컴포넌트의 커스텀 스토리입니다.
 */
export const CircleProfile: Story = {
  args: {
    width: 70,
    height: 70,
    borderRadius: 35,
    iconSize: 52,
  }
}