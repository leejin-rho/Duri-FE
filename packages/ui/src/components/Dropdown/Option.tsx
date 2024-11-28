import { theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const Option = styled.li`
  list-style-type: none;
  padding: 8px 0;
  margin: 0;
  text-align: center;

  cursor: pointer;
  &:hover {
    background-color: ${theme.palette.Gray20};
  }
`;
