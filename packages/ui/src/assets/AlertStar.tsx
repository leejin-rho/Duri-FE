import * as React from 'react';

import styled from '@emotion/styled';

import { Flex } from '../components';

interface SvgAlertStarProps extends React.SVGProps<SVGSVGElement> {
  isUpper?: boolean;
}

const SvgAlertStar: React.FC<SvgAlertStarProps> = ({
  isUpper = false,
  ...props
}) => (
  <Wrapper isUpper={isUpper} width={8} align="flex-start">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 7 8"
      {...props}
    >
      <path
        fill="#FA333F"
        d="m3.234 7.047.094-2.422-2.062 1.297L.734 5l2.157-1.125-2.157-1.14.532-.922 2.062 1.296L3.234.688h1.063l-.094 2.421 2.063-1.296.53.921-2.14 1.141L6.796 5l-.53.922-2.063-1.297.094 2.422z"
      />
    </svg>
  </Wrapper>
);

export default SvgAlertStar;

const Wrapper = styled(Flex)<{ isUpper?: boolean }>`
  margin-top: ${({ isUpper }) => (isUpper ? '-10px' : '0px')};
`;
