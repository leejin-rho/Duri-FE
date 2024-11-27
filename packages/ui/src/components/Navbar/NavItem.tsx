/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';

import { theme } from '@duri-fe/ui';
import { css } from '@emotion/react';

interface NavItemProps {
  isActive: boolean;
  text: string;
  onClick: () => void;
  iconType: 'home' | 'shop' | 'quotation' | 'diary' | 'my';
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
    <div css={[commonStyle, activeStyle]} onClick={onClick}>
      {children}
      <span css={textStyle}>{text}</span>
    </div>
  );
};

const commonStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin-top: 4px;
  font-size: 0.7rem;
`;

export default NavItem;
