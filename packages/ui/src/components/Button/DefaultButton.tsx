/** @jsxImportSource @emotion/react */
import { KeyOfTypo, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface ButtonProps {
  width?: string;
  height?: string;
  bg?: string; //background
  hoverBg?: string;
  fontColor?: string;
  typo?: string;
  hoverFontColor?: string;
  borderRadius?: string;
  border?: string;
  disabled?: boolean;
}

export const Button = styled.div<ButtonProps>`
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? `${width}` : '100%')};
  height: ${({ height }) => (height ? `${height}` : '100%')};

  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '99px'};
  background-color: ${({ bg }) => (bg ? bg : theme.palette.Normal500)};
  border: ${({ border }) => border ?? 'none'};
  box-sizing: border-box;

  flex-shrink: 0;
  ${({ typo }) => (typo ? theme.typo[typo as KeyOfTypo] : theme.typo.Label1)};
  color: ${({ fontColor }) => (fontColor ? fontColor : theme.palette.Black)};

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    /* background-color: ${({ hoverBg, disabled }) =>
      disabled ? 'none' : hoverBg || theme.palette.Normal400};
    color: ${({ hoverFontColor, disabled }) =>
      disabled ? 'none' : hoverFontColor || theme.palette.White}; */
  }
`;
