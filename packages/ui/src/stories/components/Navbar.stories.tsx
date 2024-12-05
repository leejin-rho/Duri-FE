import { BrowserRouter } from 'react-router-dom';

import type { Meta, StoryObj } from '@storybook/react';

import { DuriNavbar, Flex, SalonNavbar } from '../../components';

type Story = StoryObj<typeof DuriNavbar>;

/**
 * `Navbar` 컴포넌트의 스토리북 정의입니다.
 */
const meta: Meta<typeof DuriNavbar> = {
  title: 'components/Navbar',
  component: DuriNavbar,
  tags: ['autodocs'],
};

export default meta;

/**
 * `DuriNavbar`는 `Duri`서비스의 `Navbar`스토리입니다.
 */
export const DefaultDuriNavbar: Story = {
  render: () => (
    <BrowserRouter>
      <Flex height={72}></Flex>
      <DuriNavbar />
    </BrowserRouter>
  ),
};

/**
 * `SalonNavbar`는 `Salon`서비스의 `Navbar`스토리입니다.
 */
export const DefaultSalonNavbar: Story = {
  render: () => (
    <BrowserRouter>
      <Flex height={72}></Flex>
      <SalonNavbar />
    </BrowserRouter>
  ),
};
