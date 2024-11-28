import { Flex, theme } from '@duri-fe/ui';
import { Magnifier, TextField } from '@duri-fe/ui';
import type { Meta, StoryFn } from '@storybook/react';

// type Story = StoryObj<typeof TextField>;

/**
 * `TextField` 컴포넌트의 스토리북 정의입니다.
 */
const meta: Meta<typeof TextField> = {
  title: 'components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '상단 레이블 텍스트',
    },
    helperText: {
      control: 'object',
      description: '하단 헬퍼 텍스트 배열',
    },
    width: {
      control: { type: 'number', min: 100, max: 500, step: 10 },
      description: '텍스트 필드 너비',
    },
    height: {
      control: { type: 'number', min: 30, max: 300, step: 10 },
      description: '텍스트 필드 높이 (멀티라인일 경우)',
    },
    multiline: {
      control: 'boolean',
      description: '멀티라인 텍스트 필드 여부',
    },
    isSubTextField: {
      control: 'boolean',
      description: '하위 텍스트 필드 여부',
    },
    fontColor: {
      control: 'color',
      description: '텍스트 색상',
    },
    right: {
      control: 'text',
      description: '우측 아이콘이나 요소',
    },
    isError: {
      control: 'boolean',
      description: '에러 상태 여부',
    },
    isRound: {
      control: 'boolean',
      description: '둥근 형태의 필드 여부',
    },
    isEssential: {
      control: 'boolean',
      description: '필수 필드 표시 여부(*)',
    },
  },
};

export default meta;

const RoundTemplate: StoryFn<typeof TextField> = () => (
  <Flex direction="column" gap={10}>
    <TextField
      placeholder="반려견 이름"
      isRound={true}
      width={172}
      height={50}
      fontColor={theme.palette.Black}
    />
  </Flex>
);

export const RoundTextInput = RoundTemplate;
RoundTextInput.args = {};

const Template: StoryFn<typeof TextField> = () => (
  <Flex direction="column" gap={10}>
    <TextField placeholder="매장이름 입력" label="매장 이름" />

    <TextField
      placeholder="매장이름 입력"
      label="매장 이름"
      helperText={[{ type: 'normal', text: '필수항목입니다.' }]}
      right={<Magnifier width={24} height={24} />}
    />

    <TextField
      placeholder="매장이름 입력"
      label="매장 이름"
      helperText={[{ type: 'error', text: '필수항목입니다.' }]}
      isError={true}
      isEssential={true}
    />
  </Flex>
);

/**
 * `DefaultInput`은 'TextField' 컴포넌트의 기본 스토리입니다.
 */
export const DefaultTextInput = Template;
DefaultTextInput.args = {};

const AreaTemplate: StoryFn<typeof TextField> = () => (
  <Flex direction="column" gap={10}>
    <TextField
      placeholder="기타사항을 입력해주세요."
      label="기타사항"
      multiline={true}
      isSubTextField={true}
    />
  </Flex>
);

/**
 * `DefaultTextArea`는 'TextArea' 컴포넌트의 기본 스토리입니다.
 */
export const DefaultTextArea = AreaTemplate;
DefaultTextArea.args = {};
