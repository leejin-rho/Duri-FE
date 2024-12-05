import type { Meta, StoryFn } from '@storybook/react';

import Dropdown from '../../components/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown
      options={args.options}
      defaultValue={args.defaultValue}
      // onSelect={args.onSelect}
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
  // onSelect: (value: string) => console.log(value),
  width: 100,
};
