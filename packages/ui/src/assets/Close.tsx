import styled from '@emotion/styled';

import { theme } from '../styles';

export interface CloseProps {
  width?: number;
  height?: number;
  margin?: string;
  isOpen?: boolean;
  toggleModal?: () => void;
  currentColor?: string;
}

const Close = (props: CloseProps) => {
  const { width, height, margin, toggleModal, currentColor } = props;

  return (
    <CloseBox
      width={width}
      height={height}
      onClick={toggleModal}
      margin={margin}
    >
      <svg
        width={width ?? '18'}
        height={height ?? '18'}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 53 55"
        {...props}
      >
        <path
          fill={currentColor ?? theme.palette.Black}
          fillRule="evenodd"
          d="M15.54 14.919a1.5 1.5 0 1 0-2.121 2.12L24.379 28l-10.96 10.96a1.5 1.5 0 1 0 2.12 2.121L26.5 30.121l10.96 10.96a1.5 1.5 0 0 0 2.121-2.12L28.621 28l10.96-10.96a1.5 1.5 0 0 0-2.12-2.121L26.5 25.879z"
          clipRule="evenodd"
        />
      </svg>
    </CloseBox>
  );
};

export default Close;

const CloseBox = styled.div<{
  width?: number;
  height?: number;
  margin?: string;
}>`
  width: ${({ width }) => width ?? '17px'};
  height: ${({ height }) => height ?? '17px'};
  margin: ${({ margin }) => margin ?? ''};
  &:hover {
    cursor: pointer;
  }
`;
