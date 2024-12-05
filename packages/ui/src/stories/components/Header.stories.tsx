import { Header, theme } from '@duri-fe/ui';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Header>;

/**
 * `Header` 컴포넌트의 스토리북 정의입니다.
 */
const meta: Meta<typeof Header> = {
  title: 'components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    logoColor: { control: 'color' },
    iconColor: { control: 'color' },
    searchIcon: { control: 'boolean' },
    badge: { control: 'boolean' },
    onClickLogo: { action: 'onClickLogo' },
    onClickSearch: { action: 'onClickSearch' },
    onClickNotification: { action: 'onClickNotification' },
  },
};

export default meta;

/**
 * `DuriDefaultHeader`는 `Header` 컴포넌트의 고객 스토리입니다.
 */
export const DuriDefaultHeader: Story = {
  args: {
    logoColor: theme.palette.Black,
    iconColor: theme.palette.Normal700,
    searchIcon: true,
    onClickLogo: () => console.log('홈화면 라우팅'),
    onClickSearch: () => console.log('검색창 열기'),
    onClickNotification: () => console.log('알림창 열기'),
  }
};

/**
 * `SalonDefaultHeader`는 `Header` 컴포넌트의 미용사 스토리입니다.
 */
export const SalonDefaultHeader: Story = {
  args: {
    logoColor: theme.palette.Black,
    iconColor: theme.palette.White,
    onClickLogo: () => console.log('홈화면 라우팅'),
    onClickNotification: () => console.log('알림창 열기'),
  }
};