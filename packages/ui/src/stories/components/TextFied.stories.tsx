import { Flex } from '@duri-fe/ui';
import { Magnifier, TextField } from '@duri-fe/ui';
import type { Meta, StoryFn } from '@storybook/react';

// type Story = StoryObj<typeof TextField>;

/**
 * `TextField` 컴포넌트의 스토리북 정의입니다.
 */
const meta: Meta<typeof TextField> = {
  title: 'components/TextField',
  component: TextField,
};

export default meta;

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
