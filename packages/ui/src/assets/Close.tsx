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
        width={width ?? '17'}
        height={height ?? '17'}
        fill="none"
        viewBox="0 0 53 55"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={currentColor ?? theme.palette.Black}
          stroke={currentColor ?? theme.palette.Black}
          strokeWidth={0.5}
          d="M26.5 25.52 10.898 9.329l-.003-.003a1.326 1.326 0 0 0-1.888 0 1.427 1.427 0 0 0-.033 1.967l.003.003L24.592 27.5 8.977 43.704a1.42 1.42 0 0 0-.393.983c0 .762.597 1.396 1.353 1.396v-.25M26.5 25.52 10.898 45.67l-.18-.173M26.5 25.52 42.102 9.329l.003-.003a1.326 1.326 0 0 1 1.921.034l-.183.17zM9.938 45.833c.292 0 .573-.12.78-.335m-.78.335c-.61 0-1.105-.513-1.104-1.146 0-.303.116-.595.323-.81L24.939 27.5zm.78-.335.18.173L26.5 29.48M10.718 45.497 26.326 29.3l.174.18m0 0 .174-.18m-.174.18 15.602 16.19.18-.172M26.674 29.3l16.389 16.533v.25a1.33 1.33 0 0 1-.961-.412l.18-.173M26.674 29.3l15.608 16.198M26.674 29.3l15.608 16.198m-14.04-17.824.166-.174-.167-.174-.18.174z"
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
