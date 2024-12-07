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
    backIcon: { control: 'boolean' },
    logo: { control: 'boolean' },
    logoColor: { control: 'color' },
    title: { control: 'text' },
    titleAlign: { control: 'text' },
    iconColor: { control: 'color' },
    searchIcon: { control: 'boolean' },
    notificationIcon: { control: 'boolean' },
    badge: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    onClickLogo: { action: 'onClickLogo' },
    onClickSearch: { action: 'onClickSearch' },
    onClickNotification: { action: 'onClickNotification' },
    onClickBack: { action: 'onClickBack' },
  },
};

export default meta;

/**
 * `MainHeader`는 `Header` 컴포넌트의 메인화면 스토리입니다.
 */
export const MainHeader: Story = {
  args: {
    logo: true,
    logoColor: theme.palette.Black,
    iconColor: theme.palette.Normal700,
    searchIcon: true,
    notificationIcon: true,
    badge: true,
    onClickLogo: () => console.log('홈화면 라우팅'),
    onClickSearch: () => console.log('검색창 열기'),
    onClickNotification: () => console.log('알림창 열기'),
  }
};

/**
 * `TextCenterHeader`는 `Header` 컴포넌트의 텍스트 중앙 정렬 스토리입니다.
 */
export const TextCenterHeader: Story = {
  args: {
    backIcon: true,
    title: '타이틀',
    titleAlign: 'center',
    iconColor: theme.palette.Black,
    onClickBack: () => console.log('뒤로가기'),
  }
};

/**
 * `TextStartHeader`는 `Header` 컴포넌트의 텍스트 시작 정렬 스토리입니다.
 */
export const TextStartHeader: Story = {
  args: {
    backIcon: true,
    title: '타이틀',
    titleAlign: 'start',
    iconColor: theme.palette.Black,
    onClickBack: () => console.log('뒤로가기'),
  }
};