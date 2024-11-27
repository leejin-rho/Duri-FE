import { theme } from '@duri-fe/ui';
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
    <Button {...args} width="335px" height="54px">
      입력하러 가기
    </Button>
  </Flex>
);

/**
 * `DefaultButton`는 'Button' 컴포넌트의 기본 스토리입니다.
 */
export const DefaultButton = Template;
DefaultButton.args = {};

const BlackTemplate: StoryFn<typeof Button> = (args) => (
  <Flex direction="column" gap={10}>
    <Button {...args} width="335px" height="54px">
      입력하러 가기
    </Button>
  </Flex>
);

export const BlackButton = BlackTemplate;
BlackButton.args = {
  bg: theme.palette.Black,
  fontColor: theme.palette.White,
};

const GrayTemplate: StoryFn<typeof Button> = (args) => (
  <Flex direction="column" gap={10}>
    <Button {...args} width="335px" height="54px">
      입력하러 가기
    </Button>
  </Flex>
);

export const GrayButton = GrayTemplate;
GrayButton.args = {
  bg: theme.palette.Gray50,
};

const ShortTemplate: StoryFn<typeof Button> = (args) => (
  <Flex direction="column" gap={10}>
    <Button {...args} width="fit-content" height="43px">
      관절 질환
    </Button>
  </Flex>
);

export const ShortButton = ShortTemplate;
ShortButton.args = {
  bg: theme.palette.Black,
  fontColor: theme.palette.White,
  typo: 'Body2',
};

const ShortWhiteTemplate: StoryFn<typeof Button> = (args) => (
  <Flex direction="column" gap={10}>
    <Button {...args} width="fit-content" height="43px">
      기저 질환
    </Button>
  </Flex>
);

export const ShortWhiteButton = ShortWhiteTemplate;
ShortWhiteButton.args = {
  bg: theme.palette.White,
  typo: 'Body2',
};
