import { SkeletonCard } from '@duri-fe/ui';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof SkeletonCard>;

const meta: Meta<typeof SkeletonCard> = {
  title: 'components/SkeletonCard',
  component: SkeletonCard,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    borderRadius: { control: 'number' },
  },
};

export default meta;

export const DefaultSkeletonCard: Story = {
  args: {
    width: 300,
    height: 200,
    borderRadius: 8,
  },
};
