import { Dropdown } from '@duri-fe/ui';
import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
  title: 'components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'text' },
      description: 'Dropdown의 너비를 설정합니다.',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: 'auto' },
      },
    },
    margin: {
      control: { type: 'text' },
      description: 'Dropdown 컴포넌트의 외부 여백을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    options: {
      control: { type: 'array' },
      description: 'Dropdown에서 선택 가능한 옵션 목록입니다.',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'Dropdown의 기본 선택값입니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    onSelect: {
      action: 'selected',
      description: '선택된 값이 변경될 때 호출되는 함수입니다.',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown
      options={args.options}
      defaultValue={args.defaultValue}
      onSelect={args.onSelect}
      width={args.width}
    />
  );
};

/**
 * `DefaultDropdown`은 'Dropdown' 컴포넌트의 기본 스토리입니다.
 */
export const DefaultDropdown = Template;
DefaultDropdown.args = {
  options: ['option1', 'option2', 'option3'],
  defaultValue: '나이 입력',
  onSelect: (value: string) => console.log(value),
  width: 100,
};
