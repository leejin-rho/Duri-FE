import { theme } from '@duri-fe/ui';
import type { Meta, StoryFn } from '@storybook/react';

import { Button, Flex } from '../../components';

/**
 * `Button` 컴포넌트의 스토리북 정의입니다.
 */
const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    width: {
      type: 'string',
      description: '버튼의 너비',
      defaultValue: '100%',
      control: {
        type: 'text',
      },
    },
    height: {
      type: 'string',
      description: '버튼의 높이',
      defaultValue: '100%',
      control: {
        type: 'text',
      },
    },
    bg: {
      type: 'string',
      description: '배경색',
      defaultValue: '#f0f0f0',
      control: {
        type: 'color',
      },
    },
    hoverBg: {
      type: 'string',
      description: '호버 상태의 배경색',
      defaultValue: '#ffffff',
      control: {
        type: 'color',
      },
    },
    fontColor: {
      type: 'string',
      description: '폰트 색상',
      defaultValue: '#000000',
      control: {
        type: 'color',
      },
    },
    typo: {
      type: 'string',
      description: '타이포그래피 스타일',
      defaultValue: 'Label1',
      control: {
        type: 'select',
        options: ['Heading', 'Body1', 'Body2', 'Label1', 'Label2'],
      },
    },
    hoverFontColor: {
      type: 'string',
      description: '호버 상태의 폰트 색상',
      defaultValue: '#ffffff',
      control: {
        type: 'color',
      },
    },
    borderRadius: {
      type: 'string',
      description: '테두리의 둥근 정도',
      defaultValue: '99px',
      control: {
        type: 'text',
      },
    },
    border: {
      type: 'string',
      description: '테두리 스타일',
      defaultValue: 'none',
      control: {
        type: 'text',
      },
    },
    disabled: {
      type: 'boolean',
      description: '비활성화 여부',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
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
 * `DefaultButton`는 'Button' 컴포넌트의 기본 버전입니다.
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

/**
 * `BlackButton`는 'Button' 컴포넌트의 검정 배경 버전입니다.
 */
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

/**
 * `GrayButton`는 'Button' 컴포넌트의 회색 배경 버전입니다.
 */
export const GrayButton = GrayTemplate;
GrayButton.args = {
  bg: theme.palette.Gray50,
};

const ShortTemplate: StoryFn<typeof Button> = (args) => (
  <Flex direction="row" gap={10}>
    <Button
      {...args}
      width="fit-content"
      height="43px"
      bg={theme.palette.Black}
      fontColor={theme.palette.White}
      typo="Body2"
    >
      관절 질환
    </Button>
    <Button
      {...args}
      width="fit-content"
      height="43px"
      bg={theme.palette.White}
      typo="Body2"
      border={`1px solid ${theme.palette.Gray100}`}
    >
      기저 질환
    </Button>
  </Flex>
);

/**
 * `ShortButton`는 'Button' 컴포넌트의 짧고 둥근 버전입니다.
 */
export const ShortButton = ShortTemplate;
ShortButton.args = {};
