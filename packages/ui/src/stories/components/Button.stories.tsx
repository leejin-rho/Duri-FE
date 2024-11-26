import type { Meta, StoryFn } from '@storybook/react';

import { Button, Flex } from '../../components';

// type Story = StoryObj<typeof Button>;

/**
 * `Button` 컴포넌트의 스토리북 정의입니다.
 */
const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => (
  <Flex direction="column" gap={10}>
    <Button {...args} width="335px">
      입력하러 가기
    </Button>
  </Flex>
);

/**
 * `DefaultButton`는 'Button' 컴포넌트의 기본 스토리입니다.
 */
export const DefaultButton = Template;
DefaultButton.args = {};
