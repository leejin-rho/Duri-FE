import { Card, Flex } from '@duri-fe/ui';
import type { Meta, StoryFn } from '@storybook/react';

/**
 * `Card` 컴포넌트의 스토리북 정의입니다.
 */
const meta: Meta<typeof Card> = {
  title: 'components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    height: { control: 'number' },
    borderRadius: { control: 'number' },
    shadow: { control: 'select', options: ['small', 'large'] },
  },
};

export default meta;

const DuriDefaultTemplate: StoryFn<typeof Card> = (args) => (
  <Card {...args}>
    <Flex>내부 요소</Flex>
  </Card>
)

/**
 * `DuriDefaultCard`는 고객 메인홈에 쓰이는 `Card` 스토리입니다.
 */
export const DuriDefaultCard = DuriDefaultTemplate;
DuriDefaultCard.args = {
  height: 172,
  borderRadius: 12,
  shadow: 'small',
};


const SalonDefaultTemplate: StoryFn<typeof Card> = (args) => (
  <Card {...args}>
    <Flex>내부 요소</Flex>
  </Card>
)
/**
 * `SalonDefaultCard`는 미용사 메인홈에 쓰이는 `Card` 스토리입니다.
 */
export const SalonDefaultCard = SalonDefaultTemplate;
SalonDefaultCard.args = {
  height: 200,
  borderRadius: 16,
  shadow: 'large',
};