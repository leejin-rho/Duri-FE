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
  padding?: string;
  shadow?: string;
}

export const Button = styled.div<ButtonProps>`
  display: flex;
  padding: ${({ padding }) => padding ?? '16px 20px'};
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
  box-shadow: ${({ shadow }) => shadow ?? 'none'};

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'disabled' : 'pointer')};
    /* background-color: ${({ hoverBg, disabled }) =>
      disabled ? 'none' : hoverBg || theme.palette.Normal400};
    color: ${({ hoverFontColor, disabled }) =>
      disabled ? 'none' : hoverFontColor || theme.palette.White}; */
  }
`;

export const FrontBtn = styled(Button)`
  position: fixed;
  bottom: 92px;
  z-index: 3;
  max-width: 480px;

  @media (min-width: 480px) {
    width: 375px;
  }
`;
