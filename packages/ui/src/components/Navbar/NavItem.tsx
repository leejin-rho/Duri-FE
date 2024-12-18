/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';

import { Flex, theme } from '@duri-fe/ui';
import { css } from '@emotion/react';

interface NavItemProps {
  isActive: boolean;
  text: string;
  onClick: () => void;
  iconType:
    | 'home'
    | 'shop'
    | 'quotation'
    | 'diary'
    | 'my'
    | 'portfolio'
    | 'timetable'
    | 'income';
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  isActive,
  children,
  text,
  onClick,
}) => {
  const activeStyle = isActive ? active : inactive;

  return (
    <Flex css={[commonStyle, activeStyle]} onClick={onClick}>
      {children}
      <span css={textStyle}>{text}</span>
    </Flex>
  );
};

const commonStyle = css`
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  flex: 1;
`;

const active = css`
  color: ${theme.palette.Normal500};
`;

const inactive = css`
  color: ${theme.palette.Gray300};
`;

const textStyle = css`
  margin-top: 10px;
  font-size: 12px;
`;

export default NavItem;
