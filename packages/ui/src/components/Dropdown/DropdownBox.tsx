import { palette } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const DropdownBox = styled.div<{
  margin?: string;
  width?: number | string;
}>`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  background: ${palette.White};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin: ${({ margin }) => (margin ? margin : '0')};

  position: relative;  // Select가 이 요소를 기준으로 위치 잡힘
  cursor: pointer;
`;
